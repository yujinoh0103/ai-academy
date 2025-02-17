export type TabType = 'timer' | 'stopwatch';

export interface TabProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export interface TimeDisplayProps {
  minutes: string;
  seconds: string;
  milliseconds?: string;
}

export interface TimerControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  isRunning: boolean;
  minutes: string;
  seconds: string;
  onMinutesChange: (value: string) => void;
  onSecondsChange: (value: string) => void;
}

export interface StopwatchControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
  isRunning: boolean;
}

export interface LapTimesProps {
  laps: string[];
}

export interface TimerState {
  minutes: string;
  seconds: string;
  isRunning: boolean;
  inputMinutes: string;
  inputSeconds: string;
}

export interface StopwatchState {
  minutes: string;
  seconds: string;
  milliseconds: string;
  isRunning: boolean;
  laps: string[];
}
