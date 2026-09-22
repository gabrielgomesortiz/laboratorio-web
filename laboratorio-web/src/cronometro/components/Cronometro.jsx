import { useTimer } from '../hooks/useTimer.js';
import { formatTime } from '../logic/timer.js';
import { TIMER_PULSE_ENABLED } from '../config/timerConfig.js';
import '../styles/cronometro.css';

export default function Cronometro() {
  const { remainingTime, status } = useTimer();
  return (
    <aside className={`cronometro-hud${TIMER_PULSE_ENABLED ? ' cronometro-hud--pulse' : ''}`} aria-label="Tempo restante da partida">
      <span className="cronometro-hud__label">Tempo restante</span>
      <strong className="cronometro-hud__value">{formatTime(remainingTime)}</strong>
      <span className="cronometro-hud__status">{status}</span>
    </aside>
  );
}
