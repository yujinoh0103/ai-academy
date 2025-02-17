import React from 'react';
import { QuestionProps } from './types';
import './styles.css';

export const Question: React.FC<QuestionProps> = ({
  question,
  options,
  selectedOption,
  onSelectOption,
  isCorrect,
}) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''} ${
              selectedOption !== null &&
              index === selectedOption &&
              (isCorrect ? 'correct' : 'wrong')
            }`}
            onClick={() => onSelectOption(index)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
