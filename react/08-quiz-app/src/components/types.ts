export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
}

export interface QuestionProps {
  question: string;
  options: string[];
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  isCorrect: boolean | null;
}

export interface FeedbackProps {
  feedback: string;
  isCorrect: boolean | null;
  selectedOption: number | null;
}

export interface ResultViewProps {
  score: number;
  totalQuestions: number;
  feedback: string;
  onRestart: () => void;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  selectedOption: number | null;
  feedback: string;
  finalFeedback: string;
  isCorrect: boolean | null;
  isResultView: boolean;
}
