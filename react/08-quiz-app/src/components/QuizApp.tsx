import React, { useState, useMemo } from "react";
import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";
import { Feedback } from "./Feedback";
import { ResultView } from "./ResultView";
import { QUIZ_DATA } from "./constants";
import { QuizState } from "./types";
import "./styles.css";

export const QuizApp: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    selectedOption: null,
    feedback: "",
    finalFeedback: "",
    isCorrect: null,
    isResultView: false,
  });

  const progress = useMemo(() => {
    return ((state.currentQuestion + 1) / QUIZ_DATA.length) * 100;
  }, [state.currentQuestion]);

  const initQuiz = () => {
    setState({
      currentQuestion: 0,
      score: 0,
      selectedOption: null,
      feedback: "",
      finalFeedback: "",
      isCorrect: null,
      isResultView: false,
    });
  };

  const selectOption = (index: number) => {
    if (state.selectedOption !== null) return;

    const currentQuizData = QUIZ_DATA[state.currentQuestion];
    const isCorrect = index === currentQuizData.correct;

    setState((prev) => ({
      ...prev,
      selectedOption: index,
      isCorrect,
      feedback: currentQuizData.explanation,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));

    setTimeout(() => {
      if (state.currentQuestion === QUIZ_DATA.length - 1) {
        showResult();
      } else {
        nextQuestion();
      }
    }, 1500);
  };

  const nextQuestion = () => {
    setState((prev) => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1,
      selectedOption: null,
      feedback: "",
      isCorrect: null,
    }));
  };

  const showResult = () => {
    const score = state.score;
    let feedback: string;

    if (score === QUIZ_DATA.length) {
      feedback = "완벽해요! 모든 문제를 맞추셨네요! 🎉";
    } else if (score >= QUIZ_DATA.length * 0.7) {
      feedback = "잘하셨어요! 대부분의 문제를 맞추셨어요! 👏";
    } else if (score >= QUIZ_DATA.length * 0.4) {
      feedback = "좋아요! 절반 정도 맞추셨네요! 💪";
    } else {
      feedback = "다음에는 더 잘할 수 있을 거예요! 화이팅! 😊";
    }

    setState((prev) => ({
      ...prev,
      isResultView: true,
      finalFeedback: feedback,
    }));
  };

  if (state.isResultView) {
    return (
      <div className="container">
        <ResultView
          score={state.score}
          totalQuestions={QUIZ_DATA.length}
          feedback={state.finalFeedback}
          onRestart={initQuiz}
        />
      </div>
    );
  }

  const currentQuizData = QUIZ_DATA[state.currentQuestion];

  return (
    <div className="container">
      <header>
        <h1>JavaScript 퀴즈</h1>
        <ProgressBar
          progress={progress}
          currentQuestion={state.currentQuestion}
          totalQuestions={QUIZ_DATA.length}
        />
      </header>
      <div className="quiz-content">
        <div className="score-display">현재 점수: {state.score}</div>
        <Question
          question={currentQuizData.question}
          options={currentQuizData.options}
          selectedOption={state.selectedOption}
          onSelectOption={selectOption}
          isCorrect={state.isCorrect}
        />
        <Feedback
          feedback={state.feedback}
          isCorrect={state.isCorrect}
          selectedOption={state.selectedOption}
        />
      </div>
    </div>
  );
};
