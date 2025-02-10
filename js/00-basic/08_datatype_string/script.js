// 문자열(String) 데이터 타입 예제
let name = "홍길동";             // 큰따옴표
let greeting = '안녕하세요';      // 작은따옴표
let message = `${name}님, ${greeting}`; // 템플릿 리터럴

// 콘솔에 출력
console.log('=== 문자열 선언 방식 ===');
console.log('큰따옴표:', name);
console.log('작은따옴표:', greeting);
console.log('템플릿 리터럴:', message);

// 문자열 메서드
console.log('\n=== 문자열 메서드 ===');
console.log('문자열 길이:', name.length);
console.log('대문자:', 'hello'.toUpperCase());
console.log('소문자:', 'HELLO'.toLowerCase());
console.log('문자열 자르기:', 'Hello, World'.slice(0, 5));
console.log('문자열 포함 여부:', greeting.includes('안녕'));

// 문자열 연결
console.log('\n=== 문자열 연결 ===');
console.log('+ 연산자:', '안녕' + '하세요');
console.log('템플릿 리터럴:', `${name}의 인사: ${greeting}`);
