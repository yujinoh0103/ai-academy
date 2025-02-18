import React from "react";
import styles from "./styles.module.css";

interface MainTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
