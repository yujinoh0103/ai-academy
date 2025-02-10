// 변수 선언과 할당
let age = 25; // let으로 변수 선언
const PI = 3.14159; // const로 상수 선언
var name = "홍길동"; // var로 변수 선언 (오래된 방식)

// 변수 값 변경하기
age = 26; // let으로 선언한 변수는 값을 변경할 수 있음
// PI = 3.14;       // const로 선언한 상수는 값을 변경할 수 없음 (에러 발생)
name = "김철수"; // var로 선언한 변수도 값을 변경할 수 있음

let output2 = `변경된 나이: ${age}\n변경된 이름: ${name}`;
console.log(output2);
