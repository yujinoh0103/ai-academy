// 페이지 로드 시 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    // 클릭 이벤트
    const clickBox = document.getElementById('click-box');
    const eventLog = document.getElementById('event-log');
    
    clickBox.addEventListener('click', function(event) {
        eventLog.innerHTML += '클릭됨!<br>';
        this.classList.toggle('highlight');
        
        console.log('클릭 이벤트:', event);
    });

    // 입력 이벤트
    const inputField = document.getElementById('input-field');
    const inputDisplay = document.getElementById('input-display');
    
    inputField.addEventListener('input', function(event) {
        inputDisplay.textContent = this.value;
        console.log('입력 이벤트:', event);
    });

    // 이벤트 버블링
    const parentBox = document.getElementById('parent-box');
    const childBox = document.getElementById('child-box');
    const bubbleLog = document.getElementById('bubble-log');
    
    parentBox.addEventListener('click', function(event) {
        bubbleLog.innerHTML += '부모 요소 클릭됨<br>';
        console.log('부모 클릭 이벤트:', event);
    });
    
    childBox.addEventListener('click', function(event) {
        bubbleLog.innerHTML += '자식 요소 클릭됨<br>';
        event.stopPropagation(); // 이벤트 버블링 중단
        console.log('자식 클릭 이벤트:', event);
    });

    // 마우스 이벤트
    clickBox.addEventListener('mouseover', function() {
        console.log('마우스 오버');
    });
    
    clickBox.addEventListener('mouseout', function() {
        console.log('마우스 아웃');
    });

    // 키보드 이벤트
    inputField.addEventListener('keydown', function(event) {
        console.log('키 다운:', event.key);
    });
    
    inputField.addEventListener('keyup', function(event) {
        console.log('키 업:', event.key);
    });
});
