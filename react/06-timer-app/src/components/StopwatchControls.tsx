import React from 'react';
import { StopwatchControlsProps } from './types';
import './styles.css';

export const StopwatchControls: React.FC<StopwatchControlsProps> = ({
  onStart,
  onStop,
  onReset,
  onLap,
  isRunning,
}) => {
  return (
    <div className="controls">
      <button onClick={onStart} disabled={isRunning}>
        시작
      </button>
      <button onClick={onStop} disabled={!isRunning}>
        정지
      </button>
      <button onClick={onReset}>리셋</button>
      <button onClick={onLap} disabled={!isRunning}>
        랩
      </button>
    </div>
  );
};
