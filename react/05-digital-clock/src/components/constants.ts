export const DAYS = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
] as const;

export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export const TIME_RANGES = {
  morning: { start: 5, end: 12 },
  afternoon: { start: 12, end: 17 },
  evening: { start: 17, end: 20 },
  night: { start: 20, end: 5 },
} as const;
