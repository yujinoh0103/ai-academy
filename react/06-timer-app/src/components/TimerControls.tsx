import React from 'react';
import { TimerControlsProps } from './types';
import './styles.css';

export const TimerControls: React.FC<TimerControlsProps> = ({
  onStart,
  onStop,
  onReset,
  isRunning,
  minutes,
  seconds,
  onMinutesChange,
  onSecondsChange,
}) => {
  return (
    <div className="controls">
      <input
        type="number"
        placeholder="분"
        min="0"
        max="59"
        value={minutes}
        onChange={(e) => onMinutesChange(e.target.value)}
        disabled={isRunning}
      />
      <input
        type="number"
        placeholder="초"
        min="0"
        max="59"
        value={seconds}
        onChange={(e) => onSecondsChange(e.target.value)}
        disabled={isRunning}
      />
      <button onClick={onStart} disabled={isRunning}>
        시작
      </button>
      <button onClick={onStop} disabled={!isRunning}>
        정지
      </button>
      <button onClick={onReset}>리셋</button>
    </div>
  );
};
