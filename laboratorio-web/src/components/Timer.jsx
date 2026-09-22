import React, { useState, useEffect } from 'react';

export default function Timer({ tempoTotalSegundos = 0, partidaId }) {
    const [segundosDecorridos, setSegundosDecorridos] = useState(0);

    useEffect(() => {
        if (!partidaId) return;

        const chaveInicio = `tempo_inicio_${partidaId}`;
        const chaveFim = `tempo_fim_${partidaId}`;

        const calcularTempo = () => {
            const localInicio = localStorage.getItem(chaveInicio);
            const localFim = localStorage.getItem(chaveFim);

            // Se ainda não entrou na Sala 1, exibe apenas penalidades acumuladas ou 0
            if (!localInicio) {
                setSegundosDecorridos(tempoTotalSegundos || 0);
                return;
            }

            const inicioMs = new Date(localInicio).getTime();
            
            // Se o jogo já foi finalizado (tem tempo_fim), congela o tempo no momento do fim
            const fimMs = localFim ? new Date(localFim).getTime() : new Date().getTime();

            const diferencaSegundos = Math.floor((fimMs - inicioMs) / 1000);
            const total = (diferencaSegundos > 0 ? diferencaSegundos : 0) + (tempoTotalSegundos || 0);

            setSegundosDecorridos(total);
        };

        // Calcula imediatamente ao renderizar
        calcularTempo();

        // Se a partida já foi finalizada na sala 4, não cria o intervalo de 1s
        const localFim = localStorage.getItem(chaveFim);
        if (localFim) return;

        const intervalId = setInterval(calcularTempo, 1000);

        return () => clearInterval(intervalId);
    }, [tempoTotalSegundos, partidaId]);

    const formatarTempo = (totalSeg) => {
        const mins = Math.floor(totalSeg / 60);
        const segs = totalSeg % 60;
        return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="room-timer">
            <span className="room-timer__time">{formatarTempo(segundosDecorridos)}</span>
        </div>
    );
}