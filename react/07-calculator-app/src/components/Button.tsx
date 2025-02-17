import React from 'react';
import { ButtonProps } from './types';
import './styles.css';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  children,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
