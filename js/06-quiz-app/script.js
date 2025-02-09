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

// DOM 요소
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextBtn");
const restartButton = document.getElementById("restartBtn");
const scoreElement = document.getElementById("score");
const currentQuestionElement = document.getElementById("currentQuestion");
const totalQuestionsElement = document.getElementById("totalQuestions");
const progressFillElement = document.getElementById("progressFill");
const quizContainer = document.getElementById("quizContainer");
const resultsContainer = document.getElementById("results");
const finalScoreElement = document.getElementById("finalScore");
const finalFeedbackElement = document.getElementById("finalFeedback");

// 상태 변수
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// 초기화
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedOption = null;

  totalQuestionsElement.textContent = quizData.length;
  updateQuestion();
  updateScore();

  quizContainer.style.display = "block";
  resultsContainer.style.display = "none";
}

// 질문 업데이트
function updateQuestion() {
  const question = quizData[currentQuestion];
  currentQuestionElement.textContent = currentQuestion + 1;
  questionElement.textContent = question.question;

  // 진행 바 업데이트
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressFillElement.style.width = `${progress}%`;

  // 옵션 생성
  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionsElement.appendChild(button);
  });

  // 상태 초기화
  selectedOption = null;
  nextButton.disabled = true;
  feedbackElement.innerHTML = "";
  feedbackElement.className = "feedback";
}

// 옵션 선택
function selectOption(index) {
  if (selectedOption !== null) return; // 이미 선택했으면 추가 선택 방지

  selectedOption = index;
  const correct = quizData[currentQuestion].correct;
  const options = document.querySelectorAll(".option");

  // 선택한 옵션 표시
  options[index].classList.add("selected");

  // 정답 체크
  if (index === correct) {
    score += 20; // 각 문제당 20점
    options[index].classList.add("correct");
    feedbackElement.textContent =
      "정답입니다! " + quizData[currentQuestion].explanation;
    feedbackElement.classList.add("correct");
  } else {
    options[index].classList.add("wrong");
    options[correct].classList.add("correct");
    feedbackElement.textContent =
      "틀렸습니다. " + quizData[currentQuestion].explanation;
    feedbackElement.classList.add("wrong");
  }

  updateScore();
  nextButton.disabled = false;
}

// 점수 업데이트
function updateScore() {
  scoreElement.textContent = score;
}

// 다음 문제로 이동
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    updateQuestion();
  } else {
    showResults();
  }
}

// 결과 표시
function showResults() {
  quizContainer.style.display = "none";
  resultsContainer.style.display = "block";

  finalScoreElement.textContent = score;

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

  finalFeedbackElement.textContent = feedback;
}

// 이벤트 리스너
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", initQuiz);

// 퀴즈 시작
initQuiz();
