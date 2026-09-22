# CRONÔMETRO DO JOGO

Responsabilidade: controle global do tempo da partida.

## Objetivo e arquitetura

O `TimerProvider` mantém uma única instância do cronômetro acima das páginas. O `CronometroHUD` é renderizado uma vez e fica fixo no canto superior direito; a navegação interna troca apenas o conteúdo da página. O tempo é calculado por `performance.now()`, enquanto um intervalo atualiza a interface.

Estrutura:

```text
src/cronometro/
├── components/ (Cronometro e CronometroHUD)
├── context/ (TimerContext)
├── hooks/ (useTimer)
├── logic/ (formatação e estados)
├── config/ (tempo e rota de timeout)
├── services/ (contrato para resultados/Supabase)
├── styles/ (CSS exclusivo do HUD)
└── docs/ (esta documentação e casos de uso)
```

## Configuração

### ONDE ALTERAR O TEMPO

Arquivo: `src/cronometro/config/timerConfig.js`.

Variável: `GAME_DURATION_SECONDS`.

Valor atual: `300` segundos. Equivalente: 5 minutos.

### ONDE ALTERAR A PENALIDADE

Arquivo: `src/cronometro/config/timerConfig.js`.

Variável: `PENALTY_SECONDS`.

Valor atual: `10` segundos.

Para testar: use `5` (5 segundos), `10` (10 segundos), `30` (30 segundos), `60` (1 minuto), `300` (5 minutos) ou `600` (10 minutos). Não é necessário alterar nenhum outro arquivo. A pulsação pode ser ligada/desligada em `TIMER_PULSE_ENABLED`; cores, borda e tamanho ficam no início de `src/cronometro/styles/cronometro.css`.

## API e estados

`useTimer()` expõe `startTimer()`, `pauseTimer()`, `resumeTimer()`, `finishTimer()`, `resetTimer()` e `applyPenalty(seconds)`, além de `remainingTime`, `initialTime`, `elapsedTime`, `finalTime`, `status`, `isRunning`, `isPaused`, `isFinished`, `isTimeUp` e `hasStarted`.

Estados possíveis: `IDLE`, `RUNNING`, `PAUSED`, `FINISHED` e `TIMEOUT`. Pausa existe somente para teste/administração do módulo, não representa necessariamente o comportamento final do jogo.

## Integração com a aplicação

O `App.jsx` monta o `TimerProvider` e o `CronometroHUD` acima do conteúdo do jogo. As telas oficiais devem chamar a API por `useTimer()`; o cronômetro não depende de nomes ou componentes de salas específicos. Troca de tela interna preserva o estado; recarregar o navegador é diferente e não é persistido em LocalStorage.

`finishTimer()` preserva o tempo restante e produz `FINISHED`. Uma penalidade que chega a zero produz `TIMEOUT`, para o contador uma vez e permite encaminhar a aplicação para `TIMEOUT_ROUTE`.

## Integrações futuras

`services/timerIntegration.js` é o local para adaptar o resultado a desafios, salas reais, finalização, ranking e Supabase. Nesta etapa não há conexão, tabelas nem dados fictícios. Outros módulos podem obter `getTimerResult(useTimer())` ao encerrar a partida e enviar o contrato ao serviço responsável.

As telas demonstrativas foram removidas da entrega final; a validação deve ser feita pelas telas oficiais que integrarem o módulo.
