import React, { useEffect, useState } from 'react';
import { ClockState } from './types';
import { getCurrentClockState } from './utils';
import { ClockContainer } from './ClockContainer';
import { DateDisplay } from './DateDisplay';
import { TimeDisplay } from './TimeDisplay';
import './styles.css';

export const DigitalClock: React.FC = () => {
  const [clockState, setClockState] = useState<ClockState>(getCurrentClockState());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockState(getCurrentClockState());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ClockContainer timeOfDay={clockState.timeOfDay}>
      <DateDisplay date={clockState.date} />
      <TimeDisplay 
        time={clockState.time}
        meridiem={clockState.meridiem}
      />
    </ClockContainer>
  );
};
