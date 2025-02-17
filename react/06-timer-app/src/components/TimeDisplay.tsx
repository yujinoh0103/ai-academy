import React from 'react';
import { TimeDisplayProps } from './types';
import './styles.css';

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ minutes, seconds, milliseconds }) => {
  return (
    <div className="display">
      <span>{minutes}</span>:<span>{seconds}</span>
      {milliseconds && <span>:{milliseconds}</span>}
    </div>
  );
};
