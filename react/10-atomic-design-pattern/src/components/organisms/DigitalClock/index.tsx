import React, { useEffect, useState } from "react";
import { DateDisplay } from "../../molecules/DateDisplay";
import { TimeDisplay } from "../../molecules/TimeDisplay";
import styles from "./styles.module.css";

const DAYS = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

export const DigitalClock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const hoursStr = String(hours12).padStart(2, "0");

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = DAYS[date.getDay()];

  useEffect(() => {
    const body = document.body;
    body.classList.remove("morning", "afternoon", "evening", "night");

    if (hours >= 5 && hours < 12) {
      body.classList.add("morning");
    } else if (hours >= 12 && hours < 17) {
      body.classList.add("afternoon");
    } else if (hours >= 17 && hours < 20) {
      body.classList.add("evening");
    } else {
      body.classList.add("night");
    }
  }, [hours]);

  return (
    <div className={styles.clockContainer}>
      <DateDisplay year={year} month={month} date={day} day={dayOfWeek} />
      <TimeDisplay
        hours={hoursStr}
        minutes={minutes}
        seconds={seconds}
        meridiem={meridiem}
      />
    </div>
  );
};
