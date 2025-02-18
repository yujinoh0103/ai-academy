import React from "react";
import styles from "./styles.module.css";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "label" | "message" | "date" | "time" | "meridiem";
}

export const Text: React.FC<TextProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  return (
    <span className={`${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
