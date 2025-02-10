// JavaScript 동적 타이핑 예제

// 변수 타입 동적 변경
let value = 42;
console.log("=== 동적 타입 변경 ===");
console.log("초기값:", value, "타입:", typeof value);

value = "Hello";
console.log("문자열로 변경:", value, "타입:", typeof value);

value = true;
console.log("불리언으로 변경:", value, "타입:", typeof value);

value = null;
console.log("null로 변경:", value, "타입:", typeof value);

// 타입 자동 변환
console.log("\n=== 자동 타입 변환 ===");
console.log("숫자 + 문자열:", 5 + "10"); // 문자열 연결
console.log("숫자 - 문자열:", 5 - "3"); // 숫자로 변환
console.log("불리언 + 숫자:", true + 1); // 숫자로 변환
console.log("문자열 * 숫자:", "3" * 2); // 숫자로 변환

// 명시적 타입 변환
console.log("\n=== 명시적 타입 변환 ===");
console.log("String(123):", String(123), "타입:", typeof String(123));
console.log("Number('456'):", Number("456"), "타입:", typeof Number("456"));
console.log("Boolean(1):", Boolean(1), "타입:", typeof Boolean(1));

// 타입 확인
let number = 1;
let string = "2";
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let symbolValue = Symbol();

console.log("\n=== 다양한 타입 확인 ===");
console.log("number:", number, "타입:", typeof number);
console.log("string:", string, "타입:", typeof string);
console.log("boolean:", boolean, "타입:", typeof boolean);
console.log("nullValue:", nullValue, "타입:", typeof nullValue);
console.log("undefinedValue:", undefinedValue, "타입:", typeof undefinedValue);
console.log("symbolValue:", symbolValue, "타입:", typeof symbolValue);
