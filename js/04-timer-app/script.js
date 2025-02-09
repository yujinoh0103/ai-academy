// 탭 전환 기능: 탭 버튼과 콘텐츠를 관리합니다.
const tabBtns = document.querySelectorAll(".tab-btn"); // 모든 탭 버튼을 선택
const tabContents = document.querySelectorAll(".tab-content"); // 모든 탭 콘텐츠를 선택

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabName = btn.dataset.tab; // 클릭된 버튼의 데이터 속성에서 탭 이름을 가져옴

    // 활성 탭 버튼 변경
    tabBtns.forEach((b) => b.classList.remove("active")); // 모든 버튼의 활성 상태 제거
    btn.classList.add("active"); // 클릭된 버튼을 활성 상태로 설정

    // 활성 콘텐츠 변경
    tabContents.forEach((content) => {
      content.classList.remove("active"); // 모든 콘텐츠의 활성 상태 제거
      if (content.id === tabName) {
        // 콘텐츠의 ID가 탭 이름과 일치하면
        content.classList.add("active"); // 해당 콘텐츠를 활성 상태로 설정
      }
    });
  });
});

// 타이머 기능 변수 선언 및 초기화
let timerInterval; // 타이머 인터벌을 저장할 변수
let timerRunning = false; // 타이머가 실행 중인지 여부
let timerSeconds = 0; // 타이머의 총 시간(초)

// 타이머 표시와 입력 필드, 버튼 요소를 선택
const timerMinutesDisplay = document.getElementById("timer-minutes");
const timerSecondsDisplay = document.getElementById("timer-seconds");
const setMinutesInput = document.getElementById("set-minutes");
const setSecondsInput = document.getElementById("set-seconds");
const timerStartBtn = document.getElementById("timer-start");
const timerStopBtn = document.getElementById("timer-stop");
const timerResetBtn = document.getElementById("timer-reset");

// 타이머 디스플레이를 업데이트하는 함수
function updateTimerDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60); // 분 계산
  const seconds = totalSeconds % 60; // 초 계산
  timerMinutesDisplay.textContent = minutes.toString().padStart(2, "0");
  timerSecondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

// 타이머 시작 함수
function startTimer() {
  if (!timerRunning) {
    // 타이머가 실행 중이 아닐 때만
    const minutes = parseInt(setMinutesInput.value) || 0; // 입력된 분
    const seconds = parseInt(setSecondsInput.value) || 0; // 입력된 초
    timerSeconds = minutes * 60 + seconds; // 총 시간을 초로 변환

    if (timerSeconds <= 0) return; // 총 시간이 0 이하이면 종료

    timerRunning = true; // 타이머 실행 상태 설정
    timerInterval = setInterval(() => {
      timerSeconds--; // 타이머 시간 감소
      updateTimerDisplay(timerSeconds); // 디스플레이 업데이트

      if (timerSeconds <= 0) {
        // 시간이 종료되면
        clearInterval(timerInterval); // 인터벌 클리어
        timerRunning = false; // 실행 상태 해제
        alert("타이머가 종료되었습니다!"); // 알림 표시
      }
    }, 1000); // 1초마다 실행

    timerStartBtn.disabled = true; // 시작 버튼 비활성화
    timerStopBtn.disabled = false; // 정지 버튼 활성화
  }
}

// 타이머 정지 함수
function stopTimer() {
  if (timerRunning) {
    // 타이머가 실행 중일 때만
    clearInterval(timerInterval); // 인터벌 클리어
    timerRunning = false; // 실행 상태 해제
    timerStartBtn.disabled = false; // 시작 버튼 활성화
    timerStopBtn.disabled = true; // 정지 버튼 비활성화
  }
}

// 타이머 리셋 함수
function resetTimer() {
  clearInterval(timerInterval); // 인터벌 클리어
  timerRunning = false; // 실행 상태 해제
  timerSeconds = 0; // 시간 초기화
  updateTimerDisplay(0); // 디스플레이 초기화
  setMinutesInput.value = ""; // 입력 필드 초기화
  setSecondsInput.value = ""; // 입력 필드 초기화
  timerStartBtn.disabled = false; // 시작 버튼 활성화
  timerStopBtn.disabled = true; // 정지 버튼 비활성화
}

// 타이머 버튼 클릭 이벤트 리스너 추가
timerStartBtn.addEventListener("click", startTimer);
timerStopBtn.addEventListener("click", stopTimer);
timerResetBtn.addEventListener("click", resetTimer);

// 스톱워치 기능 변수 선언 및 초기화
let stopwatchInterval; // 스톱워치 인터벌을 저장할 변수
let stopwatchRunning = false; // 스톱워치가 실행 중인지 여부
let stopwatchTime = 0; // 스톱워치의 총 시간(1/100초)
let laps = []; // 랩 타임을 저장할 배열

// 스톱워치 표시와 버튼 요소를 선택
const stopwatchMinutesDisplay = document.getElementById("stopwatch-minutes");
const stopwatchSecondsDisplay = document.getElementById("stopwatch-seconds");
const stopwatchMillisecondsDisplay = document.getElementById(
  "stopwatch-milliseconds"
);
const stopwatchStartBtn = document.getElementById("stopwatch-start");
const stopwatchStopBtn = document.getElementById("stopwatch-stop");
const stopwatchResetBtn = document.getElementById("stopwatch-reset");
const stopwatchLapBtn = document.getElementById("stopwatch-lap");
const lapList = document.getElementById("lap-list");

// 스톱워치 디스플레이를 업데이트하는 함수
function updateStopwatchDisplay(time) {
  const minutes = Math.floor(time / 6000); // 분 계산
  const seconds = Math.floor((time % 6000) / 100); // 초 계산
  const milliseconds = time % 100; // 밀리초 계산

  stopwatchMinutesDisplay.textContent = minutes.toString().padStart(2, "0");
  stopwatchSecondsDisplay.textContent = seconds.toString().padStart(2, "0");
  stopwatchMillisecondsDisplay.textContent = milliseconds
    .toString()
    .padStart(2, "0");
}

// 스톱워치 시작 함수
function startStopwatch() {
  if (!stopwatchRunning) {
    // 스톱워치가 실행 중이 아닐 때만
    stopwatchRunning = true; // 실행 상태 설정
    stopwatchInterval = setInterval(() => {
      stopwatchTime++; // 시간 증가 (1/100초 단위)
      updateStopwatchDisplay(stopwatchTime); // 디스플레이 업데이트
    }, 10); // 0.01초마다 실행

    stopwatchStartBtn.disabled = true; // 시작 버튼 비활성화
    stopwatchStopBtn.disabled = false; // 정지 버튼 활성화
    stopwatchLapBtn.disabled = false; // 랩 버튼 활성화
  }
}

// 스톱워치 정지 함수
function stopStopwatch() {
  if (stopwatchRunning) {
    // 스톱워치가 실행 중일 때만
    clearInterval(stopwatchInterval); // 인터벌 클리어
    stopwatchRunning = false; // 실행 상태 해제
    stopwatchStartBtn.disabled = false; // 시작 버튼 활성화
    stopwatchStopBtn.disabled = true; // 정지 버튼 비활성화
    stopwatchLapBtn.disabled = true; // 랩 버튼 비활성화
  }
}

// 스톱워치 리셋 함수
function resetStopwatch() {
  clearInterval(stopwatchInterval); // 인터벌 클리어
  stopwatchRunning = false; // 실행 상태 해제
  stopwatchTime = 0; // 시간 초기화
  laps = []; // 랩 타임 초기화
  updateStopwatchDisplay(0); // 디스플레이 초기화
  lapList.innerHTML = ""; // 랩 목록 초기화
  stopwatchStartBtn.disabled = false; // 시작 버튼 활성화
  stopwatchStopBtn.disabled = true; // 정지 버튼 비활성화
  stopwatchLapBtn.disabled = true; // 랩 버튼 비활성화
}

// 랩 추가 함수
function addLap() {
  if (stopwatchRunning) {
    // 스톱워치가 실행 중일 때만
    const lapTime = stopwatchTime; // 현재 랩 시간
    const previousLap = laps[laps.length - 1] || 0; // 이전 랩 시간
    const lapDiff = lapTime - previousLap; // 현재 랩과 이전 랩의 차이
    laps.push(lapTime); // 랩 타임 배열에 추가

    const li = document.createElement("li");
    li.textContent = `랩 ${laps.length}: ${formatTime(
      lapDiff
    )} (총 ${formatTime(lapTime)})`;
    lapList.insertBefore(li, lapList.firstChild); // 최신 랩을 목록의 맨 위에 추가
  }
}

// 시간 형식 함수
function formatTime(time) {
  const minutes = Math.floor(time / 6000); // 분 계산
  const seconds = Math.floor((time % 6000) / 100); // 초 계산
  const milliseconds = time % 100; // 밀리초 계산
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
}

// 스톱워치 버튼 클릭 이벤트 리스너 추가
stopwatchStartBtn.addEventListener("click", startStopwatch);
stopwatchStopBtn.addEventListener("click", stopStopwatch);
stopwatchResetBtn.addEventListener("click", resetStopwatch);
stopwatchLapBtn.addEventListener("click", addLap);

// 초기 버튼 상태 설정
timerStopBtn.disabled = true; // 타이머 정지 버튼 비활성화
stopwatchStopBtn.disabled = true; // 스톱워치 정지 버튼 비활성화
stopwatchLapBtn.disabled = true; // 스톱워치 랩 버튼 비활성화
