import React from 'react';
import { DateDisplayProps } from './types';
import './styles.css';

export const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return <div className="date">{date}</div>;
};
