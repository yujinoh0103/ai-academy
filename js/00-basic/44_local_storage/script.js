// 1. 기본적인 로컬 스토리지 사용
console.log("1. 기본적인 로컬 스토리지 사용:");

// 데이터 저장
localStorage.setItem('username', '홍길동');
localStorage.setItem('lastVisit', new Date().toISOString());

// 데이터 읽기
console.log('저장된 사용자:', localStorage.getItem('username'));
console.log('마지막 방문:', localStorage.getItem('lastVisit'));

// 2. 메모장 기능
function saveNote() {
    const noteInput = document.getElementById('noteInput');
    const note = noteInput.value;
    
    try {
        localStorage.setItem('userNote', note);
        console.log('메모가 저장되었습니다.');
        displayNote();
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.error('저장 공간이 부족합니다.');
        }
    }
}

function loadNote() {
    const note = localStorage.getItem('userNote') || '';
    document.getElementById('noteInput').value = note;
    displayNote();
}

function clearNote() {
    localStorage.removeItem('userNote');
    document.getElementById('noteInput').value = '';
    displayNote();
}

function displayNote() {
    const savedNote = document.getElementById('savedNote');
    const note = localStorage.getItem('userNote');
    savedNote.textContent = note ? `저장된 메모: ${note}` : '저장된 메모가 없습니다.';
}

// 3. 사용자 설정 저장
function saveSettings(settings) {
    try {
        localStorage.setItem('userSettings', JSON.stringify(settings));
        console.log('설정이 저장되었습니다:', settings);
    } catch (e) {
        console.error('설정 저장 실패:', e);
    }
}

function loadSettings() {
    try {
        const settings = JSON.parse(localStorage.getItem('userSettings')) || {};
        console.log('설정을 불러왔습니다:', settings);
        return settings;
    } catch (e) {
        console.error('설정 로드 실패:', e);
        return {};
    }
}

// 4. 테마 설정
function toggleTheme() {
    const darkMode = document.getElementById('darkMode').checked;
    document.body.style.backgroundColor = darkMode ? '#333' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';
    
    const settings = loadSettings();
    settings.darkMode = darkMode;
    saveSettings(settings);
}

// 5. 글자 크기 설정
function changeFontSize() {
    const fontSize = document.getElementById('fontSize').value;
    document.body.style.fontSize = `${fontSize}px`;
    
    const settings = loadSettings();
    settings.fontSize = fontSize;
    saveSettings(settings);
}

// 6. 페이지 로드 시 설정 적용
window.addEventListener('load', function() {
    const settings = loadSettings();
    
    // 다크 모드 설정 적용
    if (settings.darkMode) {
        document.getElementById('darkMode').checked = true;
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    }
    
    // 글자 크기 설정 적용
    if (settings.fontSize) {
        document.getElementById('fontSize').value = settings.fontSize;
        document.body.style.fontSize = `${settings.fontSize}px`;
    }
    
    // 저장된 메모 표시
    displayNote();
});

// 7. 스토리지 이벤트 처리
window.addEventListener('storage', function(e) {
    console.log('다른 탭에서 스토리지가 변경되었습니다:');
    console.log('키:', e.key);
    console.log('이전 값:', e.oldValue);
    console.log('새로운 값:', e.newValue);
    
    // 변경된 설정 적용
    if (e.key === 'userSettings') {
        const settings = JSON.parse(e.newValue) || {};
        document.getElementById('darkMode').checked = settings.darkMode;
        document.getElementById('fontSize').value = settings.fontSize;
        document.body.style.fontSize = `${settings.fontSize}px`;
    }
});
