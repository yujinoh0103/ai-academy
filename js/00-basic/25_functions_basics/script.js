// 기본적인 함수 선언
function greet(name) {
    console.log("안녕하세요, " + name + "님!");
}

// 함수 호출하기
console.log("기본 함수 호출:");
greet("홍길동");
greet("김철수");

// 값을 반환하는 함수
function add(a, b) {
    return a + b;
}

console.log("\n반환값이 있는 함수:");
let result = add(5, 3);
console.log("5 + 3 =", result);

// 함수 표현식
let multiply = function(a, b) {
    return a * b;
};

console.log("\n함수 표현식:");
console.log("4 * 3 =", multiply(4, 3));

// 화살표 함수
let subtract = (a, b) => a - b;

console.log("\n화살표 함수:");
console.log("10 - 5 =", subtract(10, 5));
