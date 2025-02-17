import React, { useEffect } from 'react';
import { ClockContainerProps } from './types';
import './styles.css';

export const ClockContainer: React.FC<ClockContainerProps> = ({ timeOfDay, children }) => {
  useEffect(() => {
    document.body.classList.remove('morning', 'afternoon', 'evening', 'night');
    document.body.classList.add(timeOfDay);
  }, [timeOfDay]);

  return (
    <div className="container">
      <div className="clock">
        {children}
      </div>
    </div>
  );
};
