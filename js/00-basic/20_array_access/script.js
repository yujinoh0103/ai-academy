// 배열 선언
let fruits = ["사과", "바나나", "오렌지", "포도", "딸기"];

// 인덱스로 요소 접근
console.log("인덱스로 요소 접근:");
console.log("첫 번째 과일:", fruits[0]);
console.log("두 번째 과일:", fruits[1]);
console.log("마지막 과일:", fruits[fruits.length - 1]);

// 존재하지 않는 인덱스 접근
console.log("\n존재하지 않는 인덱스 접근:");
console.log("배열 길이 너머의 인덱스:", fruits[10]);  // undefined
console.log("음수 인덱스:", fruits[-1]);  // undefined

// 인덱스를 사용한 요소 수정
console.log("\n배열 요소 수정:");
console.log("수정 전 배열:", fruits);

fruits[2] = "키위";
console.log("fruits[2] = '키위' 수정 후:", fruits);

// 배열 길이 확인
console.log("\n배열 길이 관련:");
console.log("현재 배열 길이:", fruits.length);

// length를 사용한 배열 자르기
fruits.length = 3;
console.log("length = 3으로 설정 후:", fruits);
