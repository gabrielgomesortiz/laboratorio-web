// ==============================
// CONFIGURACAO DO CRONOMETRO
// ==============================
// Altere somente esta constante para testar outras duracoes.
export const GAME_DURATION_SECONDS = 300;
// Penalidade padrao aplicada por um erro de desafio.
export const PENALTY_SECONDS = 10;
export const TIMEOUT_ROUTE = '/game-over';
export const TIMER_PULSE_ENABLED = true;

export const timerConfig = {
  gameDurationSeconds: GAME_DURATION_SECONDS,
  penaltySeconds: PENALTY_SECONDS,
  timeoutRoute: TIMEOUT_ROUTE,
  pulseEnabled: TIMER_PULSE_ENABLED,
};
