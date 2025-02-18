import React from "react";
import { Text } from "../../atoms/Text";
import styles from "./styles.module.css";

interface CountDisplayProps {
  count: number;
}

export const CountDisplay: React.FC<CountDisplayProps> = ({ count }) => {
  return (
    <div className={styles.countDisplay}>
      <Text variant="default">{count}</Text>
      <Text variant="label">클릭</Text>
    </div>
  );
};
