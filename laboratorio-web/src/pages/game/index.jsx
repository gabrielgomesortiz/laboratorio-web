import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_ROUTES } from '../../config/api';
import '../../styles/portas.css';

export default function Salas() {
    const { partidaId } = useParams();
    const navigate = useNavigate();

    // Quantidade de questões/desafios concluídos (0 a 3)
    const [porta_feita, setporta_feita] = useState(0);
    const [loading, setLoading] = useState(true);

    // Consulta o estado atual da partida no localhost
    useEffect(() => {
        async function fetchStatusPartida() {
            try {
                const response = await fetch(`${API_ROUTES.partidas}/${partidaId}`);
                if (response.ok) {
                    const data = await response.json();
                    // Assumindo que a API retorna o número de questões resolvidas ou um array
                    setporta_feita(data.porta_feita || 0);
                }
            } catch (error) {
                console.error('Erro ao buscar status da partida:', error);
            } finally {
                setLoading(false);
            }
        }

        if (partidaId) {
            fetchStatusPartida();
        } else {
            setLoading(false);
        }
    }, [partidaId]);

    // Retorna a classe de fundo baseada no número de questões resolvidas
    const getDoorBgClass = () => {
        switch (porta_feita) {
            case 1:
                return 'scene-doors--q1';
            case 2:
                return 'scene-doors--q2';
            case 3:
                return 'scene-doors--q3';
            default:
                return 'scene-doors--q0';
        }
    };

    const handleDoorClick = (doorNumber) => {
        // Bloqueia acessar portas à frente da fase atual (opcional)
        if (doorNumber > porta_feita + 1) return;

        navigate(`/fase/${partidaId}/${doorNumber}`);
    };

    if (loading) {
        return <div className="start-screen">Carregando...</div>;
    }

    return (
        <main className="start-screen">
            <div className={`scene-frame ${getDoorBgClass()}`}>
                {/* Hotspots para interagir com as portas */}
                <button
                    type="button"
                    className="door-hotspot door-hotspot--1"
                    onClick={() => handleDoorClick(1)}
                    aria-label="Porta 1"
                />
                <button
                    type="button"
                    className="door-hotspot door-hotspot--2"
                    onClick={() => handleDoorClick(2)}
                    disabled={porta_feita < 1}
                    aria-label="Porta 2"
                />
                <button
                    type="button"
                    className="door-hotspot door-hotspot--3"
                    onClick={() => handleDoorClick(3)}
                    disabled={porta_feita < 2}
                    aria-label="Porta 3"
                />
                <button
                    type="button"
                    className="door-hotspot door-hotspot--4"
                    onClick={() => handleDoorClick(4)}
                    disabled={porta_feita < 3}
                    aria-label="Porta Final 4"
                />

                {/* Badge de progresso */}
                <div className="start-screen__status">
                    <span className="status-dot" />
                    PROGRESSO: {porta_feita}/3
                </div>
            </div>
        </main>
    );
}