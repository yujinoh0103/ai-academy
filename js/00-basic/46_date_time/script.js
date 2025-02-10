// 1. 기본 날짜 생성과 포맷팅
console.log("1. 기본 날짜 생성과 포맷팅:");

const now = new Date();
console.log('현재 시간:', now);
console.log('ISO 문자열:', now.toISOString());
console.log('로컬 문자열:', now.toLocaleString());
console.log('날짜 문자열:', now.toDateString());
console.log('시간 문자열:', now.toTimeString());

// 2. 실시간 시계
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // 초기 실행

// 3. 날짜 계산
function calculateDates() {
    const dateInput = document.getElementById('dateInput').value;
    const selectedDate = new Date(dateInput);
    const now = new Date();
    
    const results = document.getElementById('dateResults');
    results.innerHTML = '';
    
    if (!dateInput) {
        results.innerHTML = '<div class="date-result">날짜를 선택해주세요.</div>';
        return;
    }

    // 날짜 차이 계산
    const diffTime = Math.abs(selectedDate - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // 결과 표시
    const addResult = document.createElement('div');
    addResult.className = 'date-result';
    addResult.innerHTML = `
        <p>선택한 날짜: ${selectedDate.toLocaleDateString()}</p>
        <p>현재와의 차이: ${diffDays}일</p>
        <p>요일: ${getDayName(selectedDate.getDay())}</p>
        <p>30일 후: ${new Date(selectedDate.getTime() + (30 * 24 * 60 * 60 * 1000)).toLocaleDateString()}</p>
        <p>1년 후: ${new Date(selectedDate.getFullYear() + 1, selectedDate.getMonth(), selectedDate.getDate()).toLocaleDateString()}</p>
    `;
    
    results.appendChild(addResult);
}

function getDayName(dayIndex) {
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return days[dayIndex];
}

// 4. 타이머 기능
let timerInterval;
let remainingSeconds = 0;

function startTimer() {
    // 기존 타이머 정지
    stopTimer();
    
    // 입력값 가져오기
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    // 총 초 계산
    remainingSeconds = minutes * 60 + seconds;
    
    if (remainingSeconds <= 0) {
        alert('시간을 입력해주세요.');
        return;
    }
    
    // 타이머 시작
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        remainingSeconds--;
        
        if (remainingSeconds <= 0) {
            stopTimer();
            alert('타이머가 종료되었습니다!');
            return;
        }
        
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// 5. 날짜 포맷팅 유틸리티
const dateUtils = {
    formatDate(date, format = 'YYYY-MM-DD') {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day)
            .replace('HH', hours)
            .replace('mm', minutes)
            .replace('ss', seconds);
    },
    
    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    },
    
    addMonths(date, months) {
        const result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    },
    
    addYears(date, years) {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() + years);
        return result;
    }
};

// 유틸리티 사용 예제
console.log('\n날짜 유틸리티 사용 예제:');
const testDate = new Date();
console.log('포맷팅된 날짜:', dateUtils.formatDate(testDate, 'YYYY년 MM월 DD일 HH시 mm분 ss초'));
console.log('7일 후:', dateUtils.formatDate(dateUtils.addDays(testDate, 7)));
console.log('3개월 후:', dateUtils.formatDate(dateUtils.addMonths(testDate, 3)));
console.log('1년 후:', dateUtils.formatDate(dateUtils.addYears(testDate, 1)));
