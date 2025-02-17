import { useEffect, useMemo, useState } from "react";
import "./style.css";

// 퀴즈 데이터
const quizData = [
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

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizDataLength, setQuizDataLength] = useState(quizData.length);
  const [question, setQuestion] = useState("");
  const [isResultView, setIsResultView] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [finalFeedback, setFinalFeedback] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const progress = useMemo(() => {
    return ((currentQuestion + 1) / quizData.length) * 100;
  }, [currentQuestion, quizData.length]);

  const isSelectedOption = selectedOption !== null;
  const feedbackClassNames = [
    "feedback",
    selectedOption !== null && !isCorrect && "wrong",
    selectedOption !== null && isCorrect && "correct",
  ]
    .filter(Boolean)
    .join(" ");

  const initQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);

    setQuizDataLength(quizData.length);
    updateQuestion();

    setIsResultView(false);
  };

  const updateQuestion = () => {
    const question = quizData[currentQuestion];
    setQuestion(question.question);

    // 옵션 생성
    setOptions(question.options);

    // 상태 초기화
    setSelectedOption(null);
    setFeedback("");
  };

  const selectOption = (index: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(index);
    const correct = quizData[currentQuestion].correct;
    const options = document.querySelectorAll(".option");

    // 선택한 옵션 표시
    options[index].classList.add("selected");

    // 정답 체크
    if (index === correct) {
      setScore((prev) => prev + 20);
      setIsCorrect(true);
      setFeedback("정답입니다! " + quizData[currentQuestion].explanation);
    } else {
      setIsCorrect(false);
      setFeedback("틀렸습니다. " + quizData[currentQuestion].explanation);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prev) => {
        return prev + 1;
      });
    } else {
      showResults();
    }
  };

  useEffect(() => {
    updateQuestion();
  }, [currentQuestion]);

  const showResults = () => {
    setIsResultView(true);

    // 점수에 따른 피드백
    let feedback = "";
    if (score === 100) {
      feedback = "완벽합니다! JavaScript 마스터!";
    } else if (score >= 80) {
      feedback = "훌륭합니다! 조금만 더 공부하면 완벽할 거예요!";
    } else if (score >= 60) {
      feedback = "좋은 성적이에요! 계속 공부해보세요!";
    } else if (score >= 40) {
      feedback = "조금 더 노력이 필요해요. 다시 도전해보세요!";
    } else {
      feedback = "기초부터 차근차근 다시 공부해보는 건 어떨까요?";
    }

    setFinalFeedback(feedback);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>JavaScript 퀴즈</h1>
        <div className="progress">
          <div className="progress-text">
            <span id="currentQuestion">{currentQuestion + 1}</span>/
            <span id="totalQuestions">{quizDataLength}</span>
          </div>
          <div className="progress-bar">
            <div
              id="progressFill"
              className="progress-fill"
              style={{ width: progress + "%" }}
            ></div>
          </div>
        </div>
      </header>

      <main
        id="quizContainer"
        style={isResultView ? { display: "none" } : { display: "block" }}
      >
        <div className="quiz-content">
          <div className="score-display" id="scoreDisplay">
            점수: <span id="score">{score}</span>점
          </div>

          <div className="question-container">
            <h2 id="question">{question}</h2>
            <div id="options" className="options">
              {options.map((option, index) => {
                const correct = quizData[currentQuestion].correct;

                return (
                  <button
                    className={
                      selectedOption !== null
                        ? index === correct
                          ? "option correct"
                          : index === selectedOption
                          ? "option wrong"
                          : "option"
                        : "option"
                    }
                    key={index}
                    onClick={() => selectOption(index)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={feedbackClassNames} id="feedback">
            {feedback}
          </div>
        </div>

        <div className="controls">
          <button
            id="nextBtn"
            className="btn"
            disabled={!isSelectedOption}
            onClick={nextQuestion}
          >
            다음 문제
          </button>
        </div>
      </main>

      <div
        id="results"
        className="results"
        style={isResultView ? { display: "block" } : { display: "none" }}
      >
        <h2>퀴즈 결과</h2>
        <div className="final-score">
          최종 점수: <span id="finalScore">{score}</span>점
        </div>
        <div className="feedback-message" id="finalFeedback">
          {finalFeedback}
        </div>
        <div className="controls">
          <button
            id="restartBtn"
            className="btn"
            style={isResultView ? { display: "block" } : { display: "none" }}
            onClick={initQuiz}
          >
            다시 시작
          </button>
        </div>
      </div>
    </div>
  );
}
