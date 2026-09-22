import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { GAME_DURATION_SECONDS, PENALTY_SECONDS, TIMEOUT_ROUTE } from '../config/timerConfig.js';
import { TIMER_STATUS } from '../logic/timer.js';

const TimerContext = createContext(null);
const TICK_INTERVAL_MS = 100;

function navigateToTimeout(route) {
  window.history.pushState({ timer: 'timeout' }, '', route);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function TimerProvider({ children, initialTime = GAME_DURATION_SECONDS, timeoutRoute = TIMEOUT_ROUTE, onTimeUp }) {
  const configuredInitialTime = Math.max(0, Number(initialTime) || 0);
  const [remainingTime, setRemainingTime] = useState(configuredInitialTime);
  const [status, setStatus] = useState(TIMER_STATUS.IDLE);
  const remainingMsRef = useRef(configuredInitialTime * 1000);
  const deadlineRef = useRef(null);
  const timeoutHandledRef = useRef(false);
  const onTimeUpRef = useRef(onTimeUp);

  useEffect(() => { onTimeUpRef.current = onTimeUp; }, [onTimeUp]);

  const publishRemaining = useCallback((milliseconds) => {
    const nextMilliseconds = Math.max(0, milliseconds);
    remainingMsRef.current = nextMilliseconds;
    setRemainingTime(Math.ceil(nextMilliseconds / 1000));
    return nextMilliseconds;
  }, []);

  const handleTimeout = useCallback(() => {
    if (timeoutHandledRef.current) return;
    timeoutHandledRef.current = true;
    deadlineRef.current = null;
    publishRemaining(0);
    setStatus(TIMER_STATUS.TIMEOUT);
    if (onTimeUpRef.current) onTimeUpRef.current({ remainingTime: 0, status: TIMER_STATUS.TIMEOUT });
    else navigateToTimeout(timeoutRoute);
  }, [publishRemaining, timeoutRoute]);

  const updateFromClock = useCallback(() => {
    if (deadlineRef.current === null) return;
    const nextMilliseconds = deadlineRef.current - performance.now();
    if (nextMilliseconds <= 0) handleTimeout();
    else publishRemaining(nextMilliseconds);
  }, [handleTimeout, publishRemaining]);

  useEffect(() => {
    if (status !== TIMER_STATUS.RUNNING) return undefined;
    const intervalId = window.setInterval(updateFromClock, TICK_INTERVAL_MS);
    updateFromClock();
    return () => window.clearInterval(intervalId);
  }, [status, updateFromClock]);

  const startTimer = useCallback(() => {
    if (status !== TIMER_STATUS.IDLE || remainingMsRef.current <= 0) return false;
    timeoutHandledRef.current = false;
    deadlineRef.current = performance.now() + remainingMsRef.current;
    setStatus(TIMER_STATUS.RUNNING);
    return true;
  }, [status]);

  const pauseTimer = useCallback(() => {
    if (status !== TIMER_STATUS.RUNNING) return false;
    updateFromClock();
    deadlineRef.current = null;
    setStatus((current) => current === TIMER_STATUS.TIMEOUT ? current : TIMER_STATUS.PAUSED);
    return true;
  }, [status, updateFromClock]);

  const resumeTimer = useCallback(() => {
    if (status !== TIMER_STATUS.PAUSED || remainingMsRef.current <= 0) return false;
    deadlineRef.current = performance.now() + remainingMsRef.current;
    setStatus(TIMER_STATUS.RUNNING);
    return true;
  }, [status]);

  const finishTimer = useCallback(() => {
    if ([TIMER_STATUS.IDLE, TIMER_STATUS.FINISHED, TIMER_STATUS.TIMEOUT].includes(status)) return false;
    if (status === TIMER_STATUS.RUNNING) updateFromClock();
    if (remainingMsRef.current <= 0) return false;
    deadlineRef.current = null;
    setStatus(TIMER_STATUS.FINISHED);
    return true;
  }, [status, updateFromClock]);

  const applyPenalty = useCallback((seconds = PENALTY_SECONDS) => {
    const penaltySeconds = Number(seconds);
    if (!Number.isFinite(penaltySeconds) || penaltySeconds < 0 ||
      ![TIMER_STATUS.RUNNING, TIMER_STATUS.PAUSED].includes(status)) return false;
    if (status === TIMER_STATUS.RUNNING) updateFromClock();
    if (remainingMsRef.current <= 0) return false;
    const nextMilliseconds = publishRemaining(remainingMsRef.current - penaltySeconds * 1000);
    if (nextMilliseconds <= 0) handleTimeout();
    else if (status === TIMER_STATUS.RUNNING) deadlineRef.current = performance.now() + nextMilliseconds;
    return true;
  }, [handleTimeout, publishRemaining, status, updateFromClock]);

  const resetTimer = useCallback(() => {
    deadlineRef.current = null;
    timeoutHandledRef.current = false;
    publishRemaining(configuredInitialTime * 1000);
    setStatus(TIMER_STATUS.IDLE);
  }, [configuredInitialTime, publishRemaining]);

  const value = useMemo(() => ({
    remainingTime,
    initialTime: configuredInitialTime,
    finalTime: remainingTime,
    elapsedTime: configuredInitialTime - remainingTime,
    status,
    isRunning: status === TIMER_STATUS.RUNNING,
    isPaused: status === TIMER_STATUS.PAUSED,
    isFinished: status === TIMER_STATUS.FINISHED,
    isTimeUp: status === TIMER_STATUS.TIMEOUT,
    hasStarted: status !== TIMER_STATUS.IDLE,
    startTimer, pauseTimer, resumeTimer, finishTimer, resetTimer, applyPenalty,
  }), [applyPenalty, configuredInitialTime, finishTimer, pauseTimer, remainingTime, resetTimer, resumeTimer, startTimer, status]);

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) throw new Error('useTimer must be used inside a TimerProvider');
  return context;
}
