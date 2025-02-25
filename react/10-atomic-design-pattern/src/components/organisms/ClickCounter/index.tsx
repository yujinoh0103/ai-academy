import React, { useEffect, useState } from "react";
import { CountDisplay } from "../../molecules/CountDisplay";
import { MessageDisplay } from "../../molecules/MessageDisplay";
import { Button } from "../../atoms/Button";
import styles from "./styles.module.css";

const MESSAGES = [
  "시작해볼까요?",
  "좋아요!",
  "잘하고 있어요!",
  "대단해요!",
  "훌륭해요!",
  "믿을 수 없어요!",
  "당신은 천재인가요?!",
  "이정도면 충분해요!",
  "이제 그만하시죠...",
  "진심이세요...?",
];

const INITIAL_MESSAGE = MESSAGES[0];

export const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(INITIAL_MESSAGE);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        updateCount();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updateCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      const messageIndex = Math.min(
        Math.floor(newCount / 10),
        MESSAGES.length - 1
      );
      setMessage(MESSAGES[messageIndex]);
      return newCount;
    });
  };

  const resetCount = () => {
    setCount(0);
    setMessage(INITIAL_MESSAGE);
  };

  return (
    <div className={styles.counterContainer}>
      <div className={styles.counterBox}>
        <CountDisplay count={count} />
        <MessageDisplay message={message} />
      </div>
      <div className={styles.buttons} onClick={() => console.log("clicked")}>
        <Button onClick={updateCount} variant="primary">
          클릭
        </Button>
        <Button onClick={resetCount} variant="secondary">
          리셋
        </Button>
      </div>
    </div>
  );
};
