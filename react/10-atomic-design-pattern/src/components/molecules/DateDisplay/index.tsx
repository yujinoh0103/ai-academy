import React from "react";
import { Text } from "../../atoms/Text";
import styles from "./styles.module.css";

interface DateDisplayProps {
  year: number;
  month: number;
  date: number;
  day: string;
}

export const DateDisplay: React.FC<DateDisplayProps> = ({
  year,
  month,
  date,
  day,
}) => {
  return (
    <div className={styles.dateDisplay}>
      <Text variant="date">
        {year}년 {month}월 {date}일 {day}
      </Text>
    </div>
  );
};
