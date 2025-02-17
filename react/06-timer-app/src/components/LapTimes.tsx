import React from 'react';
import { LapTimesProps } from './types';
import './styles.css';

export const LapTimes: React.FC<LapTimesProps> = ({ laps }) => {
  if (laps.length === 0) return null;

  return (
    <div className="lap-times">
      <h3>랩 타임</h3>
      <ul id="lap-list">
        {laps.map((lap, index) => (
          <li key={index}>{lap}</li>
        ))}
      </ul>
    </div>
  );
};
