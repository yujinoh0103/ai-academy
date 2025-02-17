import React from 'react';
import { TimeDisplayProps } from './types';
import './styles.css';

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, meridiem }) => {
  return (
    <>
      <div className="time">{time}</div>
      <div className="meridiem">{meridiem}</div>
    </>
  );
};
