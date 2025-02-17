import React from 'react';
import { CountDisplayProps } from './types';
import './styles.css';

export const CountDisplay: React.FC<CountDisplayProps> = ({ count }) => {
  return (
    <div className="count-display">
      <span id="count">{count}</span>
      <span className="label">클릭</span>
    </div>
  );
};
