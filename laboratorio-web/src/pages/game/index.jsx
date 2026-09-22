import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../../config/api';
import Timer from '../../components/Timer';
import '../../styles/portas.css';

export default function Salas() {
    const { partidaId } = useParams();
    const navigate = useNavigate();

    const [partida, setPartida] = useState(null);
    const [portaFeita, setPortaFeita] = useState(0);
    const [mensagemBloqueado, setMensagemBloqueado] = useState(null);

    useEffect(() => {
        if (!partidaId) return;

        const progressoSalvo = localStorage.getItem(`progresso_${partidaId}`);
        setPortaFeita(progressoSalvo ? parseInt(progressoSalvo, 10) : 0);

        // Busca rápida dos dados da partida em segundo plano
        fetch(`${API_ROUTES.partidas}/${partidaId}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (data) setPartida(data);
            })
            .catch((err) => console.error('Erro na API:', err));
    }, [partidaId]);

    const getDoorBgClass = () => {
        switch (portaFeita) {
            case 1: return 'scene-doors--q1';
            case 2: return 'scene-doors--q2';
            case 3: return 'scene-doors--q3';
            case 4: return 'scene-doors--q3';
            default: return 'scene-doors--q0';
        }
    };

    const handleDoorClick = (doorNumber) => {
        if (doorNumber > portaFeita + 1) {
            setMensagemBloqueado(`Resolva o desafio da Porta ${portaFeita + 1} primeiro!`);
            setTimeout(() => setMensagemBloqueado(null), 2000);
            return;
        }

        // Se for a Porta 1, grava o exato momento do clique no localStorage caso ainda não exista
        if (doorNumber === 1 && partidaId) {
            const chaveInicio = `tempo_inicio_${partidaId}`;
            if (!localStorage.getItem(chaveInicio)) {
                localStorage.setItem(chaveInicio, new Date().toISOString());
            }
        }

        navigate(`/jogo/${partidaId}/sala/${doorNumber}`);
    };

    const handleEncerrarPartida = async () => {
        if (window.confirm('Deseja realmente encerrar a partida?')) {
            try {
                await fetch(`${API_ROUTES.partidas}/${partidaId}`, { method: 'DELETE' });
            } catch (error) {
                console.error('Erro ao excluir partida:', error);
            } finally {
                localStorage.removeItem(`progresso_${partidaId}`);
                localStorage.removeItem(`tempo_inicio_${partidaId}`);
                navigate('/');
            }
        }
    };

    return (
        <main className="start-screen">
            <div className={`scene-frame ${getDoorBgClass()}`}>
                <button
                    type="button"
                    className="door-hotspot door-hotspot--1"
                    onClick={() => handleDoorClick(1)}
                    disabled={portaFeita >= 1}
                    aria-label="Sala 1"
                />
                <button
                    type="button"
                    className="door-hotspot door-hotspot--2"
                    onClick={() => handleDoorClick(2)}
                    disabled={portaFeita < 1 || portaFeita >= 2}
                    aria-label="Sala 2"
                />
                <button
                    type="button"
                    className="door-hotspot door-hotspot--3"
                    onClick={() => handleDoorClick(3)}
                    disabled={portaFeita < 2 || portaFeita >= 3}
                    aria-label="Sala 3"
                />
                <button
                    type="button"
                    className="door-hotspot door-hotspot--4"
                    onClick={() => handleDoorClick(4)}
                    disabled={portaFeita < 3 || portaFeita >= 4}
                    aria-label="Sala 4"
                />

                <div className="start-screen__status">
                    <span className="status-dot" />
                    <span>PROGRESSO: {portaFeita}/4</span>
                    <span style={{ margin: '0 8px' }}>|</span>
                    {partidaId ? (
                        <Timer
                            partidaId={partidaId}
                            tempoTotalSegundos={partida?.tempo_total_segundos || 0}
                        />
                    ) : (
                        <span>TEMPO: 00:00</span>
                    )}
                </div>

                <button
                    type="button"
                    className="room-back"
                    onClick={handleEncerrarPartida}
                >
                    SAIR DA PARTIDA
                </button>

                {mensagemBloqueado && (
                    <div className="room-feedback room-feedback--error" style={{ position: 'absolute', bottom: '26.5%', left: '50%', transform: 'translateX(-50%)' }}>
                        {mensagemBloqueado}
                    </div>
                )}
            </div>
        </main>
    );
}