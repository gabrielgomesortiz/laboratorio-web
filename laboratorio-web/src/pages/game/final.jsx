import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { API_ROUTES } from '../../config/api';
import '../../styles/final.css';

// Importação com os nomes exatos solicitados
import final_bom from '../../../public/assets/backgrounds/final/final_bom.png';
import final_bom2 from '../../../public/assets/backgrounds/final/final_bom2.png';
import final_bom3 from '../../../public/assets/backgrounds/final/final_bom3.png';
import final_bom4 from '../../../public/assets/backgrounds/final/final_bom4.png';

import final_ruim from '../../../public/assets/backgrounds/final/final_ruim.png';
import final_ruim2 from '../../../public/assets/backgrounds/final/final_ruim2.png';

// Sequências mapeadas
const sequenciaBom = [final_bom, final_bom2, final_bom3, final_bom4];
const sequenciaRuim = [final_ruim, final_ruim2];

export default function Final() {
    const { partidaId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

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

    // Efeito para passar os frames da sequência de imagens com tempo fluido (3.5 segundos por imagem)
    useEffect(() => {
        if (!animandoSaida || etapaFimAnimacao) return;

        const intervalo = setInterval(() => {
            setIndiceImagem((prev) => {
                if (prev < imagensAtivas.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(intervalo);
                    setEtapaFimAnimacao(true);
                    return prev;
                }
            });
        }, 1000); // 3500ms (3.5 segundos) por frame para dar tempo de absorver o contexto

        return () => clearInterval(intervalo);
    }, [animandoSaida, etapaFimAnimacao, imagensAtivas.length]);

    // Retorna ao início após o término da animação da última imagem
    useEffect(() => {
        if (!etapaFimAnimacao) return;

        const timerFinal = setTimeout(() => {
            navigate('/');
        }, 2000); // Tempo para apreciar o frame final ou o Game Over antes de voltar ao menu

        return () => clearInterval(timerFinal);
    }, [etapaFimAnimacao, navigate]);

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