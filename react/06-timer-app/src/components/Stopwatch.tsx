import React, { useState, useEffect, useCallback } from 'react';
import { TimeDisplay } from './TimeDisplay';
import { StopwatchControls } from './StopwatchControls';
import { LapTimes } from './LapTimes';
import { StopwatchState } from './types';
import './styles.css';

export const Stopwatch: React.FC = () => {
  const [state, setState] = useState<StopwatchState>({
    minutes: '00',
    seconds: '00',
    milliseconds: '00',
    isRunning: false,
    laps: [],
  });

  const updateStopwatch = useCallback(() => {
    setState((prev) => {
      const ms = parseInt(prev.milliseconds) + 1;
      const s = parseInt(prev.seconds);
      const m = parseInt(prev.minutes);

      if (ms === 100) {
        const newSeconds = s + 1;
        if (newSeconds === 60) {
          return {
            ...prev,
            minutes: String(m + 1).padStart(2, '0'),
            seconds: '00',
            milliseconds: '00',
          };
        }
        return {
          ...prev,
          seconds: String(newSeconds).padStart(2, '0'),
          milliseconds: '00',
        };
      }

      return {
        ...prev,
        milliseconds: String(ms).padStart(2, '0'),
      };
    });
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (state.isRunning) {
      intervalId = setInterval(updateStopwatch, 10);
    }
    return () => clearInterval(intervalId);
  }, [state.isRunning, updateStopwatch]);

  const handleStart = () => {
    setState((prev) => ({ ...prev, isRunning: true }));
  };

  const handleStop = () => {
    setState((prev) => ({ ...prev, isRunning: false }));
  };

  const handleReset = () => {
    setState({
      minutes: '00',
      seconds: '00',
      milliseconds: '00',
      isRunning: false,
      laps: [],
    });
  };

  const handleLap = () => {
    setState((prev) => ({
      ...prev,
      laps: [
        `${prev.minutes}:${prev.seconds}:${prev.milliseconds}`,
        ...prev.laps,
      ],
    }));
  };

  return (
    <div className="tab-content active">
      <TimeDisplay
        minutes={state.minutes}
        seconds={state.seconds}
        milliseconds={state.milliseconds}
      />
      <StopwatchControls
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        onLap={handleLap}
        isRunning={state.isRunning}
      />
      <LapTimes laps={state.laps} />
    </div>
  );
};
