import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../config/api';
import '../styles/inicio.css';

export default function Index() {
    const navigate = useNavigate();

    const [isAlarmActive, setIsAlarmActive] = useState(false);
    const [isRedFrame, setIsRedFrame] = useState(false);

    useEffect(() => {
        const imgRed = new Image();
        imgRed.src = '/assets/backgrounds/inicio-alarme.png';

        const imgNormal = new Image();
        imgNormal.src = '/assets/backgrounds/inicio-acordado.png';
    }, []);

    const handleStart = async () => {
        if (isAlarmActive) return;

        setIsAlarmActive(true);

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
            }, 2500);
        } catch (error) {
            console.error('Erro ao iniciar partida:', error);
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