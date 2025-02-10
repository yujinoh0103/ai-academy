// 1. 기본 정규표현식 패턴
console.log("1. 기본 정규표현식 패턴:");

const patterns = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    phone: /^(01[016789])-?(\d{3,4})-?(\d{4})$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/
};

// 2. 이메일 검증
function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const resultDiv = document.getElementById('emailResult');
    
    if (patterns.email.test(email)) {
        resultDiv.innerHTML = `<span class="valid">유효한 이메일 주소입니다: ${email}</span>`;
        
        // 이메일 분석
        const [username, domain] = email.split('@');
        resultDiv.innerHTML += `
            <br>사용자명: ${username}
            <br>도메인: ${domain}
        `;
    } else {
        resultDiv.innerHTML = `<span class="invalid">유효하지 않은 이메일 주소입니다.</span>`;
    }
}

// 3. 전화번호 검증
function validatePhone() {
    const phone = document.getElementById('phoneInput').value;
    const resultDiv = document.getElementById('phoneResult');
    
    if (patterns.phone.test(phone)) {
        // 전화번호 형식 통일 (하이픈 추가)
        const formattedPhone = phone.replace(/^(\d{3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
        resultDiv.innerHTML = `<span class="valid">유효한 전화번호입니다: ${formattedPhone}</span>`;
        
        // 통신사 확인
        const carrier = getPhoneCarrier(phone);
        resultDiv.innerHTML += `<br>통신사: ${carrier}`;
    } else {
        resultDiv.innerHTML = `<span class="invalid">유효하지 않은 전화번호입니다.</span>`;
    }
}

function getPhoneCarrier(phone) {
    const prefix = phone.replace(/-/g, '').slice(0, 3);
    const carriers = {
        '010': 'Unknown',
        '011': 'SKT',
        '016': 'KT',
        '017': 'SKT',
        '018': 'KT',
        '019': 'LG U+'
    };
    return carriers[prefix] || 'Unknown';
}

// 4. 문자열 검색 및 치환
function searchAndReplace() {
    const text = document.getElementById('textInput').value;
    const pattern = document.getElementById('searchPattern').value;
    const replacement = document.getElementById('replaceText').value;
    const resultDiv = document.getElementById('searchResult');
    
    try {
        // 정규식 생성
        const regex = new RegExp(pattern, 'g');
        
        // 검색 결과
        const matches = text.match(regex) || [];
        
        // 치환 결과
        const replacedText = text.replace(regex, replacement);
        
        // 결과 표시
        resultDiv.innerHTML = `
            <p>찾은 패턴 수: ${matches.length}</p>
            <p>찾은 패턴: ${matches.join(', ')}</p>
            <p>치환 결과:</p>
            <pre>${replacedText}</pre>
        `;
    } catch (e) {
        resultDiv.innerHTML = `<span class="invalid">잘못된 정규식 패턴입니다: ${e.message}</span>`;
    }
}

// 5. 유용한 정규식 패턴들
const usefulPatterns = {
    // 숫자만
    numbers: /^\d+$/,
    
    // 영문자만
    letters: /^[A-Za-z]+$/,
    
    // 한글만
    korean: /^[가-힣]+$/,
    
    // 공백 제거
    removeSpaces: /\s+/g,
    
    // HTML 태그 제거
    removeHtml: /<[^>]*>/g,
    
    // URL에서 도메인 추출
    domain: /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/,
    
    // 날짜 형식 (YYYY-MM-DD)
    date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
};

// 6. 정규식 패턴 테스트
console.log('\n정규식 패턴 테스트:');

const testCases = {
    email: ['test@example.com', 'invalid.email', 'test@test@test.com'],
    phone: ['010-1234-5678', '01012345678', '010-123-4567', '012-345-6789'],
    password: ['Pass1234!', 'onlytext', '12345678', 'Pass1234'],
    url: ['https://example.com', 'http://sub.example.co.kr/path', 'invalid.url']
};

Object.entries(testCases).forEach(([type, cases]) => {
    console.log(`\n${type} 테스트:`);
    cases.forEach(test => {
        console.log(`${test}: ${patterns[type].test(test)}`);
    });
});
