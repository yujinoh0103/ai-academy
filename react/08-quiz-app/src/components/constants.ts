import { QuizQuestion } from './types';

export const QUIZ_DATA: QuizQuestion[] = [
  {
    question: "JavaScript에서 변수를 선언하는 키워드가 아닌 것은?",
    options: ["let", "var", "const", "function"],
    correct: 3,
    explanation: "function은 함수를 선언하는 키워드입니다.",
  },
  {
    question: "다음 중 배열 메서드가 아닌 것은?",
    options: ["push()", "pop()", "shift()", "replace()"],
    correct: 3,
    explanation: "replace()는 문자열 메서드입니다.",
  },
  {
    question: "JavaScript에서 false로 평가되지 않는 것은?",
    options: ["0", "''", "[]", "null"],
    correct: 2,
    explanation: "빈 배열 []은 truthy 값입니다.",
  },
  {
    question: "다음 중 이벤트 타입이 아닌 것은?",
    options: ["click", "mouseover", "keydown", "refresh"],
    correct: 3,
    explanation: "refresh는 존재하지 않는 이벤트 타입입니다.",
  },
  {
    question: "localStorage에 데이터를 저장할 때 사용하는 메서드는?",
    options: [
      "localStorage.set()",
      "localStorage.setItem()",
      "localStorage.add()",
      "localStorage.push()",
    ],
    correct: 1,
    explanation: "localStorage.setItem()이 올바른 메서드입니다.",
  },
];
