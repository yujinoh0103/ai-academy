import React from 'react';
import { CounterButtonProps } from './types';
import './styles.css';

export const CounterButton: React.FC<CounterButtonProps> = ({
  onClick,
  variant,
  children
}) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
