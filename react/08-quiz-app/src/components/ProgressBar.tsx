import React from 'react';
import { ProgressBarProps } from './types';
import './styles.css';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="progress">
      <div className="progress-text">
        {currentQuestion + 1} / {totalQuestions}
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
