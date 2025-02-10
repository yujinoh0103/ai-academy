// 배열 생성
let fruits = ["사과", "바나나", "오렌지"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["안녕", 42, true];

// 배열 출력
console.log("과일 배열:", fruits);
console.log("숫자 배열:", numbers);
console.log("혼합 배열:", mixed);

// 배열 길이
console.log("\n배열 길이:");
console.log("과일 배열 길이:", fruits.length);
console.log("숫자 배열 길이:", numbers.length);
console.log("혼합 배열 길이:", mixed.length);

// 다양한 배열 생성 방법
console.log("\n다양한 배열 생성 방법:");
let emptyArray = [];
let arrayWithNew = new Array(3);  // 길이가 3인 빈 배열
let arrayWithValues = new Array(1, 2, 3);  // [1, 2, 3]

console.log("빈 배열:", emptyArray);
console.log("new Array(3):", arrayWithNew);
console.log("new Array(1,2,3):", arrayWithValues);
