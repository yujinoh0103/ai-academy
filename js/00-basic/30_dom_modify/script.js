// 텍스트 내용 변경하기
function changeText() {
    const element = document.getElementById('text');
    
    // innerHTML 사용
    element.innerHTML = '텍스트가 <strong>변경</strong>되었습니다!';
    
    console.log('innerHTML로 변경된 내용:', element.innerHTML);
}

// 스타일 변경하기
function changeStyle() {
    const element = document.getElementById('style-test');
    
    // 직접 스타일 변경
    element.style.backgroundColor = 'lightblue';
    element.style.padding = '10px';
    element.style.border = '2px solid blue';
    
    console.log('변경된 스타일:', element.style.cssText);
}

// 클래스 추가/제거하기
function toggleClass() {
    const element = document.getElementById('class-test');
    
    // 클래스 토글
    element.classList.toggle('highlight');
    element.classList.toggle('red-text');
    
    // 현재 클래스 목록 출력
    console.log('현재 클래스 목록:', element.className);
    
    // classList 메서드 예시
    console.log('highlight 클래스 포함 여부:', element.classList.contains('highlight'));
    console.log('현재 클래스 개수:', element.classList.length);
}
