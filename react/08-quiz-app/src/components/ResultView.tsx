import React from 'react';
import { ResultViewProps } from './types';
import './styles.css';

export const ResultView: React.FC<ResultViewProps> = ({
  score,
  totalQuestions,
  feedback,
  onRestart,
}) => {
  return (
    <div className="result-view">
      <h2>퀴즈 결과</h2>
      <div className="score">
        {score} / {totalQuestions} 점
      </div>
      <div className="final-feedback">{feedback}</div>
      <button className="restart-button" onClick={onRestart}>
        다시 시작하기
      </button>
    </div>
  );
};
