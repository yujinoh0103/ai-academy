// DOM 요소
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const meridiemElement = document.getElementById("meridiem");
const body = document.body;

// 요일 배열
const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

// 시간대별 배경색 설정
function setBackgroundByTime(hours) {
  body.classList.remove("morning", "afternoon", "evening", "night");

  if (hours >= 5 && hours < 12) {
    body.classList.add("morning");
  } else if (hours >= 12 && hours < 17) {
    body.classList.add("afternoon");
  } else if (hours >= 17 && hours < 20) {
    body.classList.add("evening");
  } else {
    body.classList.add("night");
  }
}

// 시계 업데이트 함수
function updateClock() {
  const now = new Date();

  // 날짜 포맷팅
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = days[now.getDay()];

  // 시간 포맷팅
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";

  // 12시간제로 변환
  hours = hours % 12;
  hours = hours ? hours : 12; // 0시를 12시로 표시

  // DOM 업데이트
  dateElement.textContent = `${year}년 ${month}월 ${date}일 ${day}`;
  timeElement.textContent = `${String(hours).padStart(
    2,
    "0"
  )}:${minutes}:${seconds}`;
  meridiemElement.textContent = meridiem;

  // 배경색 업데이트
  setBackgroundByTime(now.getHours());
}

// 초기 실행
updateClock();

// 1초마다 업데이트
setInterval(updateClock, 1000);
