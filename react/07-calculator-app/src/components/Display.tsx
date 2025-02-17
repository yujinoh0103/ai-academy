import React from 'react';
import { DisplayProps } from './types';
import './styles.css';

export const Display: React.FC<DisplayProps> = ({
  previousOperand,
  currentOperand,
  operation,
}) => {
  return (
    <div className="display">
      <div className="previous-operand">{`${previousOperand} ${operation}`}</div>
      <div className="current-operand">{currentOperand}</div>
    </div>
  );
};
