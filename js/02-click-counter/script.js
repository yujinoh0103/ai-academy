// DOM 요소
const countDisplay = document.getElementById("count");
const messageDisplay = document.getElementById("message");
const clickButton = document.getElementById("clickBtn");
const resetButton = document.getElementById("resetBtn");

// 상태 변수
let count = 0;

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

// 카운트 업데이트 함수
function updateCount() {
  count++;
  countDisplay.textContent = count;

  // 메시지 업데이트
  const messageIndex = Math.min(Math.floor(count / 10), messages.length - 1);
  messageDisplay.textContent = messages[messageIndex];
}

// 리셋 함수
function resetCount() {
  count = 0;
  countDisplay.textContent = count;
  messageDisplay.textContent = "시작하려면 버튼을 클릭하세요!";
}

// 이벤트 리스너
clickButton.addEventListener("click", updateCount);
resetButton.addEventListener("click", resetCount);

// 키보드 이벤트 추가 (스페이스바로 클릭)
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault(); // 스크롤 방지
    clickButton.click();
  }
});
