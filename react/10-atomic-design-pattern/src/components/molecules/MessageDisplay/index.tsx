import React from "react";
import { Text } from "../../atoms/Text";
import styles from "./styles.module.css";

interface MessageDisplayProps {
  message: string;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
  return (
    <div className={styles.messageDisplay}>
      <Text variant="message">{message}</Text>
    </div>
  );
};
