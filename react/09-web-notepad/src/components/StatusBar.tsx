import React from 'react';
import { StatusBarProps } from './types';
import './styles.css';

export const StatusBar: React.FC<StatusBarProps> = ({ 
  charCount,
  saveStatus 
}) => {
  return (
    <div className="status-bar">
      <span id="charCount">{charCount}자</span>
      <span id="saveStatus">{saveStatus}</span>
    </div>
  );
};
