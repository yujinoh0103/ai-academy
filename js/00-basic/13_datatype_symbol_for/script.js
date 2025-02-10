// Symbol.for와 전역 Symbol 예제

// Symbol.for()로 전역 Symbol 생성
const globalSymbol1 = Symbol.for("globalSymbol");
const globalSymbol2 = Symbol.for("globalSymbol");
const globalSymbol3 = Symbol.for("다른심볼");

console.log("=== 전역 Symbol 생성 ===");
console.log("globalSymbol1:", globalSymbol1);
console.log("globalSymbol2:", globalSymbol2);
console.log("globalSymbol3:", globalSymbol3);

// 전역 Symbol 비교
console.log("\n=== 전역 Symbol 비교 ===");
console.log("같은 키의 전역 Symbol 비교 (globalSymbol1 === globalSymbol2):", 
  globalSymbol1 === globalSymbol2);
console.log("다른 키의 전역 Symbol 비교 (globalSymbol1 === globalSymbol3):", 
  globalSymbol1 === globalSymbol3);

// Symbol.keyFor로 전역 Symbol의 키 찾기
console.log("\n=== 전역 Symbol 키 찾기 ===");
console.log("globalSymbol1의 키:", Symbol.keyFor(globalSymbol1));
console.log("globalSymbol2의 키:", Symbol.keyFor(globalSymbol2));
console.log("globalSymbol3의 키:", Symbol.keyFor(globalSymbol3));

// 일반 Symbol과 전역 Symbol 비교
const regularSymbol = Symbol("일반심볼");
console.log("\n=== 일반 Symbol과 전역 Symbol 비교 ===");
console.log("일반 Symbol의 키 찾기:", Symbol.keyFor(regularSymbol));
console.log("일반 Symbol의 description:", regularSymbol.description);
