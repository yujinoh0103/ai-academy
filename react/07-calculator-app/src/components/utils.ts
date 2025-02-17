export const roundResult = (number: number): number => {
  return Math.round(number * 100000000) / 100000000;
};
