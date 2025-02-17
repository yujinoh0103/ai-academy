import React, { useEffect, useState } from 'react';
import { CountDisplay } from './CountDisplay';
import { MessageDisplay } from './MessageDisplay';
import { CounterButton } from './CounterButton';
import { MESSAGES, INITIAL_MESSAGE } from './constants';
import './styles.css';

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
    <div className="container">
      <h1>클릭 카운터</h1>
      <div className="counter-box">
        <CountDisplay count={count} />
        <MessageDisplay message={message} />
      </div>
      <div className="buttons">
        <CounterButton
          onClick={updateCount}
          variant="primary"
        >
          클릭하기
        </CounterButton>
        <CounterButton
          onClick={resetCount}
          variant="secondary"
        >
          리셋
        </CounterButton>
      </div>
    </div>
  );
};
