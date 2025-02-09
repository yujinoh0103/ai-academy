class Calculator {
  constructor() {
    // 화면에 있는 숫자 표시 부분 가져오기
    this.previousOperandElement = document.querySelector(".previous-operand"); // 이전 숫자
    this.currentOperandElement = document.querySelector(".current-operand"); // 현재 숫자

    // 계산기 시작하기
    this.clear(); // 모든 값 초기화
    this.setupEventListeners(); // 버튼 클릭할 수 있게 준비
  }

  // 모든 값을 처음으로 되돌리기
  clear() {
    this.currentOperand = "0"; // 현재 숫자를 0으로
    this.previousOperand = ""; // 이전 숫자를 지우기
    this.operation = undefined; // 계산 기호를 지우기
    this.updateDisplay(); // 화면 새로고침
  }

  // 한 글자씩 지우기
  delete() {
    if (this.currentOperand === "0") return; // 이미 0이면 아무것도 안 함
    this.currentOperand = this.currentOperand.toString().slice(0, -1); // 마지막 글자 지우기
    if (this.currentOperand === "" || this.currentOperand === "-")
      this.currentOperand = "0"; // 다 지웠으면 0으로
  }

  // 숫자 추가하기
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return; // 소수점은 한 번만
    if (this.currentOperand === "0" && number !== ".") {
      this.currentOperand = number; // 0일 때는 새 숫자로 바꾸기
    } else {
      this.currentOperand = this.currentOperand.toString() + number; // 숫자 뒤에 추가
    }
  }

  // +/- 부호 바꾸기
  toggleSign() {
    // 현재 숫자를 실제 숫자로 변환
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return; // 숫자가 아니면 무시

    // 부호 바꾸기
    this.currentOperand = (-current).toString();
  }

  // 계산 기호(+, -, ×, ÷) 선택하기
  chooseOperation(operation) {
    if (this.currentOperand === "0") return; // 숫자가 없으면 무시

    // 이전에 입력한 계산이 있으면 먼저 계산하기
    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation; // 계산 기호 저장
    this.previousOperand = this.currentOperand; // 현재 숫자를 이전 숫자로 옮기기
    this.currentOperand = "0"; // 새로운 숫자 입력 준비
  }

  // 계산하기
  compute() {
    let result;
    const prev = parseFloat(this.previousOperand); // 이전 숫자
    const current = parseFloat(this.currentOperand); // 현재 숫자

    // 숫자가 아니면 계산 안 함
    if (isNaN(prev) || isNaN(current)) return;

    // 계산 기호에 따라 다르게 계산
    switch (this.operation) {
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
          this.clear(); // 모두 지우기
          return;
        }
        result = prev / current; // 나누기
        break;
      default:
        return;
    }

    this.currentOperand = this.roundResult(result); // 계산 결과 저장
    this.operation = undefined; // 계산 기호 지우기
    this.previousOperand = ""; // 이전 숫자 지우기
  }

  // 소수점 자리수 제한하기 (최대 8자리)
  roundResult(number) {
    return Math.round(number * 100000000) / 100000000;
  }

  // 화면 업데이트하기
  updateDisplay() {
    // 현재 숫자 보여주기
    this.currentOperandElement.textContent = this.currentOperand;

    // 계산 기호가 있으면 이전 숫자도 함께 보여주기
    if (this.operation != null) {
      this.previousOperandElement.textContent = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandElement.textContent = "";
    }
  }

  // 버튼 클릭과 키보드 입력 처리하기
  setupEventListeners() {
    // 숫자 버튼을 클릭했을 때
    document.querySelectorAll(".number").forEach((button) => {
      button.addEventListener("click", () => {
        this.appendNumber(button.textContent); // 숫자 추가
        this.updateDisplay(); // 화면 새로고침
      });
    });

    // 계산 버튼을 클릭했을 때
    document.querySelectorAll(".operator").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        switch (action) {
          case "clear":
            this.clear(); // C 버튼: 모두 지우기
            break;
          case "delete":
            this.delete(); // ⌫ 버튼: 한 글자 지우기
            break;
          case "equals":
            this.compute(); // = 버튼: 계산하기
            break;
          case "add":
            this.chooseOperation("+"); // 더하기
            break;
          case "subtract":
            this.chooseOperation("-"); // 빼기
            break;
          case "multiply":
            this.chooseOperation("×"); // 곱하기
            break;
          case "divide":
            this.chooseOperation("÷"); // 나누기
            break;
          case "toggle-sign":
            this.toggleSign(); // +/- 부호 바꾸기
            break;
        }
        this.updateDisplay(); // 화면 새로고침
      });
    });

    // 키보드로 입력했을 때
    document.addEventListener("keydown", (e) => {
      if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
        this.appendNumber(e.key); // 숫자나 소수점
      } else if (e.key === "+") {
        this.chooseOperation("+"); // 더하기
      } else if (e.key === "-") {
        this.chooseOperation("-"); // 빼기
      } else if (e.key === "*") {
        this.chooseOperation("×"); // 곱하기
      } else if (e.key === "/") {
        e.preventDefault();
        this.chooseOperation("÷"); // 나누기
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        this.compute(); // 계산하기
      } else if (e.key === "Backspace") {
        this.delete(); // 지우기
      } else if (e.key === "Escape") {
        this.clear(); // 모두 지우기
      }
      this.updateDisplay(); // 화면 새로고침
    });
  }
}

// 계산기 인스턴스 생성
const calculator = new Calculator();
