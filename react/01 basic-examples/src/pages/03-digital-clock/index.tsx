import "./style.css";
import { useState, useEffect } from "react";

// 요일 배열
const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

export default function DigitalClock() {
  const [date, setDate] = useState("1970년 1월 1일 목요일");
  const [time, setTime] = useState("00:00:00");
  const [meridiem, setMeridiem] = useState("AM");

  const setBackgroundByTime = (hours: number) => {
    document.body.classList.remove("morning", "afternoon", "evening", "night");

    if (hours >= 5 && hours < 12) {
      document.body.classList.add("morning");
    } else if (hours >= 12 && hours < 17) {
      document.body.classList.add("afternoon");
    } else if (hours >= 17 && hours < 20) {
      document.body.classList.add("evening");
    } else {
      document.body.classList.add("night");
    }
  };

  const updateClock = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const newMeridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    setDate(`${year}년 ${month}월 ${date}일 ${day}`);
    setTime(`${String(hours).padStart(2, "0")}:${minutes}:${seconds}`);
    setMeridiem(newMeridiem);

    setBackgroundByTime(now.getHours());
  };

  useEffect(() => {
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <div className="date">{date}</div>
        <div className="time">{time}</div>
        <div className="meridiem">{meridiem}</div>
      </div>
    </div>
  );
}
