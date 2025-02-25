import React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  variant,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
