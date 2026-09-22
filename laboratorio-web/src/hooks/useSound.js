import { useCallback, useEffect, useRef } from 'react';

/**
 * Toca um efeito sonoro a partir de um arquivo em /public.
 * Enquanto o áudio estiver tocando, novas chamadas a play() são ignoradas,
 * evitando que cliques repetidos "espamem" o som e sobreponham várias vezes.
 * Retorna { play, stop }. Com loop: true, o áudio repete até stop() ser chamado.
 */
export function useSound(src, { volume = 1, loop = false } = {}) {
    const audioRef = useRef(null);
    const isPlayingRef = useRef(false);

    const getAudio = useCallback(() => {
        if (!audioRef.current) {
            const audio = new Audio(src);
            audio.volume = volume;
            audio.loop = loop;
            audio.addEventListener('ended', () => {
                isPlayingRef.current = false;
            });
            audioRef.current = audio;
        }
        return audioRef.current;
    }, [src, volume, loop]);

    const play = useCallback(() => {
        if (isPlayingRef.current) return;

        const audio = getAudio();
        isPlayingRef.current = true;
        audio.currentTime = 0;

        audio.play().catch((error) => {
            console.error(`Erro ao tocar áudio "${src}":`, error);
            isPlayingRef.current = false;
        });
    }, [getAudio, src]);

    const stop = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        isPlayingRef.current = false;
    }, []);

    // Para o áudio se o componente sair de tela (troca de rota, desmontagem, etc.)
    useEffect(() => {
        return () => {
            stop();
        };
    }, [stop]);

    return { play, stop };
}
