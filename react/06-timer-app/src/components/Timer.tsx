import React, { useState, useEffect, useCallback } from 'react';
import { TimeDisplay } from './TimeDisplay';
import { TimerControls } from './TimerControls';
import { TimerState } from './types';
import './styles.css';

export const Timer: React.FC = () => {
  const [state, setState] = useState<TimerState>({
    minutes: '00',
    seconds: '00',
    isRunning: false,
    inputMinutes: '',
    inputSeconds: '',
  });

  const updateTimer = useCallback(() => {
    setState((prev) => {
      const totalSeconds = 
        parseInt(prev.minutes) * 60 + parseInt(prev.seconds) - 1;
      
      if (totalSeconds < 0) {
        return { ...prev, isRunning: false };
      }

      const newMinutes = Math.floor(totalSeconds / 60);
      const newSeconds = totalSeconds % 60;

      return {
        ...prev,
        minutes: String(newMinutes).padStart(2, '0'),
        seconds: String(newSeconds).padStart(2, '0'),
      };
    });
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (state.isRunning) {
      intervalId = setInterval(updateTimer, 1000);
    }
    return () => clearInterval(intervalId);
  }, [state.isRunning, updateTimer]);

  const handleStart = () => {
    if (!state.isRunning) {
      setState((prev) => ({
        ...prev,
        isRunning: true,
        minutes: prev.inputMinutes.padStart(2, '0') || '00',
        seconds: prev.inputSeconds.padStart(2, '0') || '00',
      }));
    }
  };

  const handleStop = () => {
    setState((prev) => ({ ...prev, isRunning: false }));
  };

  const handleReset = () => {
    setState({
      minutes: '00',
      seconds: '00',
      isRunning: false,
      inputMinutes: '',
      inputSeconds: '',
    });
  };

  const handleMinutesChange = (value: string) => {
    const minutes = Math.min(Math.max(0, parseInt(value) || 0), 59);
    setState((prev) => ({
      ...prev,
      inputMinutes: String(minutes),
    }));
  };

  const handleSecondsChange = (value: string) => {
    const seconds = Math.min(Math.max(0, parseInt(value) || 0), 59);
    setState((prev) => ({
      ...prev,
      inputSeconds: String(seconds),
    }));
  };

  return (
    <div className="tab-content active">
      <TimeDisplay minutes={state.minutes} seconds={state.seconds} />
      <TimerControls
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        isRunning={state.isRunning}
        minutes={state.inputMinutes}
        seconds={state.inputSeconds}
        onMinutesChange={handleMinutesChange}
        onSecondsChange={handleSecondsChange}
      />
    </div>
  );
};
