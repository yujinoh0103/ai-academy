import React from 'react';
import { FeedbackProps } from './types';
import './styles.css';

export const Feedback: React.FC<FeedbackProps> = ({
  feedback,
  isCorrect,
  selectedOption,
}) => {
  if (!selectedOption) return null;

  const feedbackClassNames = [
    'feedback',
    !isCorrect && 'wrong',
    isCorrect && 'correct',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={feedbackClassNames}>{feedback}</div>;
};
