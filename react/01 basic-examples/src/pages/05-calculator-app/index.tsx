import { useState } from "react";
import "./style.css";

export default function CalculatorApp() {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");

  const clear = () => {
    setCurrentOperand("0");
    setPreviousOperand("");
    setOperation("");
  };

  const appendNumber = (number: string) => {
    if (number === "." && currentOperand.includes(".")) return; // 소수점은 한 번만
    if (currentOperand === "0" && number !== ".") {
      setCurrentOperand(number); // 0일 때는 새 숫자로 바꾸기
    } else {
      setCurrentOperand(currentOperand.toString() + number); // 숫자 뒤에 추가
    }
  };

  const deleteNumber = () => {
    if (currentOperand === "0") return; // 이미 0이면 아무것도 안함
    setCurrentOperand((prev) => {
      const nextValue = prev.toString().slice(0, -1); // 마지막 글자 지우기
      if (nextValue === "" || nextValue === "-") return "0"; // 다 지웠면 0으로
      return nextValue;
    });
  };

  const toggleSign = () => {
    // 현재 숫자를 실제 숫자로 변환
    const current = parseFloat(currentOperand);
    if (isNaN(current)) return; // 숫자가 아니면 무시

    // 부호 바꾸기
    setCurrentOperand((-current).toString());
  };

  const chooseOperation = (operation: string) => {
    if (currentOperand === "0") return; // 숫자가 없으면 무시

    // 이전에 입력한 계산이 있면 먼저 계산하기
    if (previousOperand !== "") {
      compute();
    }

    setOperation(operation); // 계산 기호 저장
    setPreviousOperand(currentOperand); // 현재 숫자를 이전 숫자로 옮기기
    setCurrentOperand("0"); // 새로운 숫자 입력 준비
  };

  const compute = () => {
    let result: number;
    const prev = parseFloat(previousOperand); // 이전 숫자
    const current = parseFloat(currentOperand); // 현재 숫자

    // 숫자가 아니면 계산 안 함
    if (isNaN(prev) || isNaN(current)) return;

    // 계산 기호에 따라 다르게 계산
    switch (operation) {
      case "+":
        result = prev + current; // 더하기
        break;
      case "-":
        result = prev - current; // 빼기
        break;
      case "×":
        result = prev * current; // 곱하기
        break;
      case "÷":
        if (current === 0) {
          // 0으로 나누려고 하면
          alert("0으로 나눌 수 없어요!"); // 경고 메시지
          clear(); // 모두 지우기
          return;
        }
        result = prev / current; // 나누기
        break;
      default:
        return;
    }

    setCurrentOperand(roundResult(result).toString()); // 계산 결과 저장
    setOperation(""); // 계산 기호 지우기
    setPreviousOperand(""); // 이전 숫자 지우기
  };

  const roundResult = (number: number) => {
    return Math.round(number * 100000000) / 100000000;
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">{`${previousOperand} ${operation}`}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <div className="buttons">
        <button className="operator" onClick={clear}>
          C
        </button>
        <button className="operator" onClick={deleteNumber}>
          ⌫
        </button>
        <button className="operator" onClick={toggleSign}>
          +/-
        </button>
        <button className="operator" onClick={() => chooseOperation("÷")}>
          ÷
        </button>

        <button className="number" onClick={() => appendNumber("7")}>
          7
        </button>
        <button className="number" onClick={() => appendNumber("8")}>
          8
        </button>
        <button className="number" onClick={() => appendNumber("9")}>
          9
        </button>
        <button className="operator" onClick={() => chooseOperation("×")}>
          ×
        </button>

        <button className="number" onClick={() => appendNumber("4")}>
          4
        </button>
        <button className="number" onClick={() => appendNumber("5")}>
          5
        </button>
        <button className="number" onClick={() => appendNumber("6")}>
          6
        </button>
        <button className="operator" onClick={() => chooseOperation("-")}>
          -
        </button>

        <button className="number" onClick={() => appendNumber("1")}>
          1
        </button>
        <button className="number" onClick={() => appendNumber("2")}>
          2
        </button>
        <button className="number" onClick={() => appendNumber("3")}>
          3
        </button>
        <button className="operator" onClick={() => chooseOperation("+")}>
          +
        </button>

        <button className="number zero" onClick={() => appendNumber("0")}>
          0
        </button>
        <button className="number" onClick={() => appendNumber(".")}>
          .
        </button>
        <button className="operator" onClick={compute}>
          =
        </button>
      </div>
    </div>
  );
}
