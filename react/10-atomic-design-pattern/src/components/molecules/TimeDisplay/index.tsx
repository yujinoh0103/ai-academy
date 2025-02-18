import React from "react";
import { Text } from "../../atoms/Text";
import styles from "./styles.module.css";

interface TimeDisplayProps {
  hours: string;
  minutes: string;
  seconds: string;
  meridiem: string;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({
  hours,
  minutes,
  seconds,
  meridiem,
}) => {
  return (
    <div className={styles.timeDisplay}>
      <Text variant="time">
        {hours}:{minutes}:{seconds}
      </Text>
      <Text variant="meridiem">{meridiem}</Text>
    </div>
  );
};
