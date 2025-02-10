// Symbol 데이터 타입 예제

// 기본 Symbol 생성
const symbol1 = Symbol();
const symbol2 = Symbol();

console.log("=== 기본 Symbol ===");
console.log("symbol1:", symbol1);
console.log("symbol2:", symbol2);
console.log("symbol1 === symbol2:", symbol1 === symbol2);
console.log("typeof symbol1:", typeof symbol1);

// 설명이 있는 Symbol 생성
const symbolWithDesc = Symbol("my symbol");
console.log("\n=== Symbol 설명 ===");
console.log("Symbol 설명:", symbolWithDesc.description);

// Symbol을 객체의 속성 키로 사용
const MY_KEY = Symbol();
const obj = {
  [MY_KEY]: "Symbol을 키로 사용한 값",
  regularKey: "일반 문자열 키를 사용한 값",
};

console.log("\n=== Symbol을 객체 키로 사용 ===");
console.log("객체의 Symbol 키 값:", obj[MY_KEY]);
console.log("일반적인 Object.keys():", Object.keys(obj));
console.log("Symbol 키 목록:", Object.getOwnPropertySymbols(obj));
