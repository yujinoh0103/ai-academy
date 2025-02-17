import React from 'react';
import { MessageDisplayProps } from './types';
import './styles.css';

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
  return (
    <div className="message" id="message">
      {message}
    </div>
  );
};
