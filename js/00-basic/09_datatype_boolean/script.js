// 불리언(Boolean) 데이터 타입 예제
let isStudent = true;
let isWorking = false;

// 콘솔에 출력
console.log('=== 기본 불리언 값 ===');
console.log('isStudent:', isStudent);
console.log('isWorking:', isWorking);

// 비교 연산자
console.log('\n=== 비교 연산자 ===');
console.log('10 > 5:', 10 > 5);
console.log('10 < 5:', 10 < 5);
console.log('10 === 10:', 10 === 10);
console.log('10 !== 5:', 10 !== 5);

// 논리 연산자
console.log('\n=== 논리 연산자 ===');
console.log('AND (true && true):', true && true);
console.log('AND (true && false):', true && false);
console.log('OR (true || false):', true || false);
console.log('OR (false || false):', false || false);
console.log('NOT (!true):', !true);
console.log('NOT (!false):', !false);

// 조건식 예제
let age = 20;
let hasPermission = true;
console.log('\n=== 조건식 예제 ===');
console.log('나이가 18세 이상이고 권한이 있는가?', age >= 18 && hasPermission);
