import "./style.css";
import { useEffect, useState } from "react";

// 재미있는 메시지 배열
const messages = [
  "잘하고 있어요! 계속 클릭하세요!",
  "와우! 정말 열심히 클릭하시네요!",
  "대단해요! 계속 가보죠!",
  "멈출 수 없어요! 더 클릭해보세요!",
  "이제 손가락 운동이 되고 있어요!",
  "클릭의 달인이 되어가고 있어요!",
  "이 정도면 클릭 챔피언!",
  "클릭신의 경지에 도달하셨네요!",
  "이제 마우스가 연기 날 것 같아요!",
  "클릭 레벨이 오버플로우 될 것 같아요!",
];

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("시작하려면 버튼을 클릭하세요!");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        updateCount();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const updateCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      const messageIndex = Math.min(
        Math.floor(newCount / 10),
        messages.length - 1
      );
      setMessage(messages[messageIndex]);
      return newCount;
    });
  };

  const resetCount = () => {
    setCount(0);
    setMessage("시작하려면 버튼을 클릭하세요!");
  };

  return (
    <div className={"container"}>
      <h1>클릭 카운터</h1>
      <div className={"counter-box"}>
        <div className={"count-display"}>
          <span id={"count"}>{count}</span>
          <span className={"label"}>클릭</span>
        </div>
        <div className={"message"} id={"message"}>
          {message}
        </div>
      </div>
      <div className={"buttons"}>
        <button id={"clickBtn"} className={"btn primary"} onClick={updateCount}>
          클릭하기
        </button>
        <button
          id={"resetBtn"}
          className={"btn secondary"}
          onClick={resetCount}
        >
          리셋
        </button>
      </div>
    </div>
  );
}
