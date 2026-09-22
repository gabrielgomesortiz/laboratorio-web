# Casos de uso

## UC — Iniciar cronômetro
- **Objetivo:** começar a partida.
- **Ator:** jogador.
- **Pré-condição:** estado `IDLE`.
- **Fluxo principal:** clicar em Iniciar Jogo; a tela chama `startTimer()`.
- **Fluxo alternativo:** chamadas fora de `IDLE` são recusadas.
- **Pós-condição:** estado `RUNNING`.
- **Integração:** a tela de partida fornece o mesmo Provider global.

## UC — Pausar e retomar cronômetro
- **Objetivo:** testar/administar a contagem.
- **Ator:** operador da tela de teste.
- **Pré-condição:** estado `RUNNING` para pausar ou `PAUSED` para retomar.
- **Fluxo principal:** chamar `pauseTimer()` ou `resumeTimer()`.
- **Fluxo alternativo:** estados incompatíveis não alteram o cronômetro.
- **Pós-condição:** `PAUSED` ou `RUNNING`.
- **Integração:** qualquer desafio pode chamar a API pública por `useTimer()`.

## UC06 — Aplicar penalidade
- **Objetivo:** reduzir o tempo por uma penalidade de desafio.
- **Ator:** jogo/desafio.
- **Pré-condição:** estado `RUNNING` ou `PAUSED`; segundos não negativos.
- **Fluxo principal:** chamar `applyPenalty(seconds)` ou `applyPenalty()` para usar os 10 segundos padrão.
- **Fluxo alternativo:** se chegar a zero, executa timeout.
- **Pós-condição:** tempo reduzido ou `TIMEOUT`.
- **Integração:** desafios reais chamarão a API, sem conhecer a implementação.

## UC13 — Encerrar jogo
- **Objetivo:** finalizar normalmente.
- **Ator:** jogo.
- **Pré-condição:** estado `RUNNING` ou `PAUSED`.
- **Fluxo principal:** chamar `finishTimer()`.
- **Fluxo alternativo:** `IDLE`, `FINISHED` e `TIMEOUT` não finalizam novamente.
- **Pós-condição:** `FINISHED`, com tempo preservado.
- **Integração:** resultado pode ser transformado por `timerIntegration.js`.

## UC — Reiniciar cronômetro
- **Objetivo:** preparar nova partida.
- **Ator:** jogador/operador.
- **Pré-condição:** qualquer estado.
- **Fluxo principal:** chamar `resetTimer()`.
- **Fluxo alternativo:** nenhuma; o contador não inicia automaticamente.
- **Pós-condição:** tempo inicial e `IDLE`.
- **Integração:** a tela de Game Over navega para a tela inicial.

## UC14 — Exibir cronômetro
- **Objetivo:** mostrar o tempo continuamente.
- **Ator:** jogador.
- **Pré-condição:** Provider montado.
- **Fluxo principal:** `CronometroHUD` lê `useTimer()` e formata segundos em `MM:SS`.
- **Fluxo alternativo:** movimento reduzido desativa a animação, sem ocultar o tempo.
- **Pós-condição:** HUD fixo permanece visível durante qualquer rota.
- **Integração:** nenhuma dependência de sala; é um HUD global.
