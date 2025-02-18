import React from "react";
import { MainTemplate } from "../../templates/MainTemplate";
import { DigitalClock } from "../../organisms/DigitalClock";
import styles from "./styles.module.css";

export const ClockPage: React.FC = () => {
  return (
    <div className={styles.clockPage}>
      <MainTemplate title="디지털 시계">
        <DigitalClock />
      </MainTemplate>
    </div>
  );
};
