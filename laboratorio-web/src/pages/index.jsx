import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../config/api';
import { useSound } from '../hooks/useSound';
import '../styles/inicio.css';

export default function Index() {
    const navigate = useNavigate();
    const { play: tocarSirene } = useSound('/assets/audio/sirene.mp3');
    const { play: tocarRonco, stop: pararRonco } = useSound(
        '/assets/audio/roncando.mp3',
        { loop: true, volume: 0.6 },
    );

    const [isAlarmActive, setIsAlarmActive] = useState(false);
    const [isRedFrame, setIsRedFrame] = useState(false);
    const alarmeAtivoRef = useRef(false);

    useEffect(() => {
        const imgRed = new Image();
        imgRed.src = '/assets/backgrounds/inicio-alarme.png';

        const imgNormal = new Image();
        imgNormal.src = '/assets/backgrounds/inicio-acordado.png';
    }, []);

    // Ronco toca em loop enquanto ele "dorme" na tela inicial. Navegadores bloqueiam
    // áudio antes de qualquer interação do usuário, então tentamos tocar direto e,
    // se for bloqueado, começamos assim que o usuário interagir pela primeira vez com a página.
    useEffect(() => {
        if (isAlarmActive) return;

        tocarRonco();

        const iniciarNoPrimeiroToque = () => {
            if (alarmeAtivoRef.current) return;
            tocarRonco();
        };
        const eventos = ['click', 'keydown', 'touchstart'];
        eventos.forEach((evento) =>
            document.addEventListener(evento, iniciarNoPrimeiroToque, { once: true }),
        );

        return () => {
            eventos.forEach((evento) =>
                document.removeEventListener(evento, iniciarNoPrimeiroToque),
            );
        };
    }, [isAlarmActive, tocarRonco]);

    const handleStart = async () => {
        if (isAlarmActive) return;

        alarmeAtivoRef.current = true;
        setIsAlarmActive(true);
        pararRonco();
        tocarSirene();

        try {
            const response = await fetch(API_ROUTES.partidas, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'EM_ANDAMENTO',
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `Não foi possível criar a partida. Status: ${response.status}. ${errorText}`,
                );
            }

            const partida = await response.json();

            if (!partida?.id) {
                throw new Error('A API não retornou o ID da partida.');
            }

            setTimeout(() => {
                navigate(`/jogo/${partida.id}`);
            }, 8000);
        } catch (error) {
            console.error('Erro ao iniciar partida:', error);
            alarmeAtivoRef.current = false;
            setIsAlarmActive(false);
            setIsRedFrame(false);
        }
    };

    useEffect(() => {
        if (!isAlarmActive) return;

        const intervalId = setInterval(() => {
            setIsRedFrame((prev) => !prev);
        }, 200);

        return () => {
            clearInterval(intervalId);
        };
    }, [isAlarmActive]);

    const getSceneClass = () => {
        if (!isAlarmActive) {
            return 'scene-frame--dormindo';
        }

        return isRedFrame
            ? 'scene-frame--alarme-vermelho'
            : 'scene-frame--alarme-normal';
    };

    return (
        <main className="start-screen">
            <div className={`scene-frame ${getSceneClass()}`}>
                {!isAlarmActive && (
                    <button
                        type="button"
                        className="btn-iniciar-hotspot"
                        onClick={handleStart}
                        aria-label="Iniciar Jogo"
                    />
                )}

                <div
                    className={`start-screen__status ${
                        isAlarmActive
                            ? 'start-screen__status--alarm'
                            : ''
                    }`}
                >
                    <span className="status-dot" />

                    {isAlarmActive
                        ? 'ALERTA DE EMERGÊNCIA'
                        : 'SISTEMA ONLINE'}
                </div>
            </div>
        </main>
    );
}