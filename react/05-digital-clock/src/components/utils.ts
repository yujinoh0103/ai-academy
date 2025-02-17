import { DAYS, TIME_RANGES, TimeOfDay } from './constants';
import { ClockState } from './types';

export const getTimeOfDay = (hours: number): TimeOfDay => {
  if (hours >= TIME_RANGES.morning.start && hours < TIME_RANGES.morning.end) {
    return 'morning';
  } else if (hours >= TIME_RANGES.afternoon.start && hours < TIME_RANGES.afternoon.end) {
    return 'afternoon';
  } else if (hours >= TIME_RANGES.evening.start && hours < TIME_RANGES.evening.end) {
    return 'evening';
  } else {
    return 'night';
  }
};

export const getCurrentClockState = (): ClockState => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = DAYS[now.getDay()];

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return {
    date: `${year}년 ${month}월 ${date}일 ${day}`,
    time: `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`,
    meridiem,
    timeOfDay: getTimeOfDay(now.getHours())
  };
};
