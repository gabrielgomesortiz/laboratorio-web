import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import questoesPadrao from '../../../questoes/teorica';
import questoesMatematica from '../../../questoes/calc';
import { API_ROUTES } from '../../../config/api';
import Timer from '../../../components/Timer';
import '../../../styles/salas.css';

export default function Room({ numeroSala: propNumeroSala }) {
    const { partidaId, numeroSala: paramNumeroSala } = useParams();
    const navigate = useNavigate();

    const salaAtual = propNumeroSala || parseInt(paramNumeroSala, 10) || 1;

    const [partida, setPartida] = useState(null);
    const [questoesUsadas, setQuestoesUsadas] = useState([]);
    const [enigma, setEnigma] = useState(null);
    const [tentativas, setTentativas] = useState(1);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const listaQuestoesAtiva = salaAtual === 4 ? questoesMatematica : questoesPadrao;

    useEffect(() => {
        const progressoSalvo = parseInt(localStorage.getItem(`progresso_${partidaId}`) || '0', 10);
        if (salaAtual <= progressoSalvo) {
            navigate(`/jogo/${partidaId}`);
            return;
        }

        // INICIA O CRONÔMETRO: Assim que entra na Sala 1 pela primeira vez
        if (salaAtual === 1 && partidaId) {
            const chaveInicio = `tempo_inicio_${partidaId}`;
            if (!localStorage.getItem(chaveInicio)) {
                localStorage.setItem(chaveInicio, new Date().toISOString());
            }
        }

        // Busca rápida de dados da partida em background sem travar a tela
        fetch(`${API_ROUTES.partidas}/${partidaId}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (data) setPartida(data);
            })
            .catch((err) => console.error('Erro ao buscar partida:', err));
    }, [partidaId, salaAtual, navigate]);

    const sortearQuestao = (ignoradas = []) => {
        const disponiveis = listaQuestoesAtiva.filter((q) => !ignoradas.includes(q.id));
        const lista = disponiveis.length > 0 ? disponiveis : listaQuestoesAtiva;
        const indice = Math.floor(Math.random() * lista.length);
        return lista[indice];
    };

    useEffect(() => {
        const progressoSalvo = parseInt(localStorage.getItem(`progresso_${partidaId}`) || '0', 10);
        if (salaAtual <= progressoSalvo) return;

        const primeiraQuestao = sortearQuestao([]);
        setEnigma(primeiraQuestao);
        setQuestoesUsadas([primeiraQuestao.id]);
        setTentativas(1);
        setOpcaoSelecionada(null);
        setFeedback(null);
    }, [salaAtual, partidaId]);

    const aplicarPenalidadeBackend = async () => {
        try {
            const res = await fetch(`${API_ROUTES.partidas}/${partidaId}/penalidade`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ segundos: 30 }),
            });

            if (res.ok) {
                const partidaAtualizada = await res.json();
                setPartida(partidaAtualizada);
            }
        } catch (err) {
            console.error('Erro ao aplicar penalidade:', err);
        }
    };

    // Função que congela o cronômetro no milissegundo do clique e salva o tempo no banco
    const finalizarESalvarTempoNoBanco = async (statusFinal = 'CONCLUIDA') => {
        if (!partidaId) return;

        const dataFim = new Date().toISOString();
        
        // 1. Marca imediatamente o fim no localStorage para travar o Timer na tela no exato momento
        localStorage.setItem(`tempo_fim_${partidaId}`, dataFim);

        const chaveInicio = `tempo_inicio_${partidaId}`;
        const localInicio = localStorage.getItem(chaveInicio);

        let segundosDecorridos = 0;
        if (localInicio) {
            const inicioMs = new Date(localInicio).getTime();
            const fimMs = new Date(dataFim).getTime();
            segundosDecorridos = Math.floor((fimMs - inicioMs) / 1000);
        }

        const tempoPenalidades = partida?.tempo_total_segundos || 0;
        const tempoFinalExato = (segundosDecorridos > 0 ? segundosDecorridos : 0) + tempoPenalidades;

        try {
            // 2. Envia o tempo total exato em segundos para o banco de dados
            await fetch(`${API_ROUTES.partidas}/${partidaId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tempo_total_segundos: tempoFinalExato,
                    status: statusFinal,
                }),
            });
        } catch (error) {
            console.error('Erro ao salvar tempo final no banco de dados:', error);
        }
    };

    const handleSubmit = async () => {
        if (opcaoSelecionada === null || submitting || !enigma) return;

        setSubmitting(true);
        const opcao = enigma.opcoes[opcaoSelecionada];
        const eCorreto = opcao.valor === true;

        if (eCorreto) {
            // SE FOR A SALA 4: TRAVA O CRONÔMETRO IMEDIATAMENTE E ENVIA PRO BANCO DE DADOS
            if (salaAtual === 4) {
                await finalizarESalvarTempoNoBanco('CONCLUIDA');
            }

            const textoSucesso = salaAtual === 4 
                ? 'Cálculo correto! Saindo do laboratório...' 
                : 'Resposta correta! Avançando...';

            setFeedback({
                status: 'success',
                text: textoSucesso,
            });

            const progressoAtual = parseInt(localStorage.getItem(`progresso_${partidaId}`) || '0', 10);
            if (salaAtual > progressoAtual) {
                localStorage.setItem(`progresso_${partidaId}`, salaAtual.toString());
            }

            setTimeout(() => {
                if (salaAtual === 4) {
                    navigate(`/jogo/${partidaId}/final`, { state: { tipoFinal: 'bom' } });
                } else {
                    navigate(`/jogo/${partidaId}`);
                }
            }, 800);

            return;
        }

        // SE JÁ ESTIVER NA TERCEIRA TENTATIVA E ERRAR NOVAMENTE -> GAME OVER (FINAL RUIM)
        if (tentativas >= 3) {
            await aplicarPenalidadeBackend();
            await finalizarESalvarTempoNoBanco('DERROTA'); // Ou 'CANCELADA' / 'GAME_OVER' dependendo do seu enum

            setFeedback({
                status: 'error',
                text: 'Porta trancada! Suas tentativas esgotaram. Game Over...',
            });

            setTimeout(() => {
                navigate(`/jogo/${partidaId}/final`, { state: { tipoFinal: 'ruim' } });
            }, 1200);

            return;
        }

        // Se ainda não chegou na 3ª tentativa, aplica a penalidade e avança para a próxima tentativa
        await aplicarPenalidadeBackend();

        const proximaTentativa = tentativas + 1;
        const proximaQuestao = sortearQuestao(questoesUsadas);
        setQuestoesUsadas((prev) => [...prev, proximaQuestao.id]);

        setEnigma(proximaQuestao);
        setTentativas(proximaTentativa);

        setFeedback({
            status: 'error',
            text: `Incorreto! (+30s). Tentativa ${proximaTentativa}/3.`,
        });

        setOpcaoSelecionada(null);
        setSubmitting(false);
    };

    return (
        <main className="start-screen">
            <div className={`scene-frame scene-room--sala${salaAtual}`}>
                <button
                    type="button"
                    className="room-back-btn"
                    onClick={() => navigate(`/jogo/${partidaId}`)}
                >
                    ← Voltar
                </button>

                <div className="start-screen__status" style={{ top: '24px', bottom: 'auto' }}>
                    <span className="status-dot" />
                    <span>SALA {salaAtual}</span>
                    <span style={{ margin: '0 8px' }}>|</span>
                    {partidaId ? (
                        <Timer
                            partidaId={partidaId}
                            tempoTotalSegundos={partida?.tempo_total_segundos || 0}
                        />
                    ) : (
                        <span>TEMPO: --:--</span>
                    )}
                </div>

                <div className="room-enigma">
                    <div className="room-enigma__attempt">
                        Tentativa {tentativas}/3 {salaAtual === 4 && '• (Cálculos Matemáticos)'}
                    </div>

                    <h2 className="room-enigma__title">{enigma?.titulo}</h2>
                    <p className="room-enigma__description">{enigma?.descricao}</p>

                    <div className="room-options">
                        {enigma?.opcoes?.map((opcao, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`room-option ${opcaoSelecionada === index ? 'room-option--selected' : ''}`}
                                onClick={() => {
                                    setOpcaoSelecionada(index);
                                    setFeedback(null);
                                }}
                            >
                                {opcao.letra}) {opcao.texto}
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="room-submit"
                        onClick={handleSubmit}
                        disabled={opcaoSelecionada === null || submitting}
                    >
                        {submitting ? 'Verificando...' : 'Confirmar Resposta'}
                    </button>

                    {feedback && (
                        <div className={`room-feedback room-feedback--${feedback.status}`}>
                            {feedback.text}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}