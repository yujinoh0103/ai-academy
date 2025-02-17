import { TimeOfDay } from './constants';

export interface DateDisplayProps {
  date: string;
}

export interface TimeDisplayProps {
  time: string;
  meridiem: string;
}

export interface ClockContainerProps {
  timeOfDay: TimeOfDay;
  children: React.ReactNode;
}

export interface ClockState {
  date: string;
  time: string;
  meridiem: string;
  timeOfDay: TimeOfDay;
}
