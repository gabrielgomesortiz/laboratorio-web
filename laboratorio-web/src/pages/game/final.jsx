import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { API_ROUTES } from '../../config/api';
import { useSound } from '../../hooks/useSound';
import '../../styles/final.css';

// Importação com os nomes exatos solicitados
import final_bom from '../../../public/assets/backgrounds/final/final_bom.png';
import final_bom2 from '../../../public/assets/backgrounds/final/final_bom2.png';
import final_bom3 from '../../../public/assets/backgrounds/final/final_bom3.png';
import final_ruim3 from '../../../public/assets/backgrounds/final/final_ruim3.png';

import final_ruim from '../../../public/assets/backgrounds/final/final_ruim.png';
import final_ruim2 from '../../../public/assets/backgrounds/final/final_ruim2.png';

// Sequências mapeadas
const sequenciaBom = [final_bom, final_bom2, final_bom3];
const sequenciaRuim = [final_ruim, final_ruim3,  final_ruim2];

export default function Final() {
    const { partidaId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { play: tocarChute } = useSound('/assets/audio/chute.mp3');
    const { play: tocarExplosao } = useSound('/assets/audio/explosao.mp3');
    const { play: tocarSadTrombone } = useSound('/assets/audio/sadtrombone.mp3');

    // Permite definir se veio como 'bom' ou 'ruim' via state da rota ou parâmetro (padrão é 'bom')
    const tipoFinal = location.state?.tipoFinal || 'bom';

    const [nome, setNome] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [erro, setErro] = useState(null);

    // Se for o final ruim, a animação começa direto. Se for o bom, espera preencher o formulário.
    const [animandoSaida, setAnimandoSaida] = useState(tipoFinal === 'ruim');
    const [indiceImagem, setIndiceImagem] = useState(0);
    const [etapaFimAnimacao, setEtapaFimAnimacao] = useState(false);

    const imagensAtivas = tipoFinal === 'ruim' ? sequenciaRuim : sequenciaBom;

    // Toca o som correspondente a cada frame da animação de saída
    useEffect(() => {
        if (!animandoSaida) return;

        if (tipoFinal === 'ruim') {
            if (indiceImagem === 1) tocarExplosao(); // explosão atinge o cientista
            if (indiceImagem === 2) tocarSadTrombone(); // tela de GAME OVER
        } else {
            if (indiceImagem === 1) tocarChute(); // chute na porta
            if (indiceImagem === 2) tocarExplosao(); // laboratório explode ao fundo
        }
    }, [animandoSaida, indiceImagem, tipoFinal, tocarChute, tocarExplosao, tocarSadTrombone]);

    const handleConfirmar = async (e) => {
        e.preventDefault();
        if (!nome.trim() || submitting) return;

        setSubmitting(true);
        setErro(null);

        try {
            const res = await fetch(`${API_ROUTES.partidas}/${partidaId}/finalizar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: nome.trim() }),
            });

            if (!res.ok) {
                throw new Error('Falha ao registrar tempo.');
            }

            // Limpa o salvamento local do progresso
            localStorage.removeItem(`progresso_${partidaId}`);

            // Dispara a animação após salvar com sucesso no final bom
            setAnimandoSaida(true);
            setIndiceImagem(0);
        } catch (err) {
            console.error('Erro ao finalizar partida:', err);
            setErro('Não foi possível salvar o seu nome. Tente novamente.');
        } finally {
            setSubmitting(false);
        }
    };

    // Efeito para passar os frames da sequência de imagens (duração variável por frame,
    // pra dar tempo do som daquela cena tocar por inteiro antes de trocar)
    useEffect(() => {
        if (!animandoSaida || etapaFimAnimacao) return;

        // Frame da explosão no final ruim precisa durar o tempo do som de explosão (~2.2s)
        const duracaoDoFrameAtual =
            tipoFinal === 'ruim' && indiceImagem === 1 ? 2300 : 1000;

        const timer = setTimeout(() => {
            setIndiceImagem((prev) => {
                if (prev < imagensAtivas.length - 1) {
                    return prev + 1;
                }
                setEtapaFimAnimacao(true);
                return prev;
            });
        }, duracaoDoFrameAtual);

        return () => clearTimeout(timer);
    }, [animandoSaida, etapaFimAnimacao, indiceImagem, imagensAtivas.length, tipoFinal]);

    // Retorna ao início após o término da animação da última imagem
    useEffect(() => {
        if (!etapaFimAnimacao) return;

        // No final ruim, espera o sadtrombone (3.6s) tocar por inteiro antes de voltar ao menu
        const tempoEspera = tipoFinal === 'ruim' ? 3700 : 2000;

        const timerFinal = setTimeout(() => {
            navigate('/');
        }, tempoEspera);

        return () => clearInterval(timerFinal);
    }, [etapaFimAnimacao, navigate, tipoFinal]);

    // Renderização da Sequência Animada com fluidez e Key para disparar o Fade-In
    if (animandoSaida) {
        const ehUltimaImagem = indiceImagem === imagensAtivas.length - 1;

        return (
            <main className="start-screen">
                <div 
                    key={indiceImagem} /* OBRIGATÓRIO: Força o React a recriar o elemento para rodar o fadeIn suave do CSS */
                    className="scene-frame final-animacao-container"
                    style={{ backgroundImage: `url(${imagensAtivas[indiceImagem]})` }}
                >
                </div>
            </main>
        );
    }

    // Tela Inicial do Final Bom com a primeira imagem de fundo e o formulário flutuando por cima
    return (
        <main className="start-screen">
            <div 
                className="scene-frame scene-frame--saida"
                style={{ backgroundImage: `url(${imagensAtivas[0]})` }}
            >
                <div className="final-card">
                    <div className="final-form-container">
                        <h1 className="final-title">VOCÊ ESCAPOU!</h1>
                        <p className="final-subtitle">
                            Digite seu nome para registrar sua pontuação no Laboratório.
                        </p>

                        <form onSubmit={handleConfirmar} className="final-form">
                            <input
                                type="text"
                                className="final-input"
                                placeholder="Digite seu nome..."
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                maxLength={20}
                                required
                                autoFocus
                            />

                            <button
                                type="submit"
                                className="final-btn-primary"
                                disabled={!nome.trim() || submitting}
                            >
                                {submitting ? 'Gravando...' : 'Salvar'}
                            </button>
                        </form>

                        {erro && <p className="final-error">{erro}</p>}
                    </div>
                </div>
            </div>
        </main>
    );
}