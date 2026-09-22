// Ponto futuro de integração com resultados, ranking e Supabase.
export function getTimerResult(timerState) {
  return {
    initialTime: timerState.initialTime,
    remainingTime: timerState.remainingTime,
    elapsedTime: timerState.elapsedTime,
    finalTime: timerState.finalTime,
    status: timerState.status,
  };
}
