// 1. 배열에서의 스프레드 연산자
console.log("1. 배열 스프레드:");

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

console.log("원본 배열:", numbers);
console.log("확장된 배열:", moreNumbers);

// 배열 병합
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];

console.log("\n배열 병합:");
console.log("병합된 배열:", combinedArray);

// 2. 객체에서의 스프레드 연산자
console.log("\n2. 객체 스프레드:");

const person = {
    name: "홍길동",
    age: 25
};

const employee = {
    ...person,
    job: "개발자",
    company: "테크 기업"
};

console.log("person 객체:", person);
console.log("employee 객체:", employee);

// 객체 병합과 속성 덮어쓰기
const defaults = { theme: "light", fontSize: 12 };
const userSettings = { theme: "dark" };
const finalSettings = { ...defaults, ...userSettings };

console.log("\n객체 병합:");
console.log("최종 설정:", finalSettings);

// 3. 레스트 매개변수
console.log("\n3. 레스트 매개변수:");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("합계 (1, 2, 3):", sum(1, 2, 3));
console.log("합계 (1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));

// 배열과 객체 구조 분해에서의 레스트
console.log("\n4. 구조 분해와 레스트:");

const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log("첫 번째:", first);
console.log("두 번째:", second);
console.log("나머지:", remaining);

const { name, age, ...details } = {
    name: "홍길동",
    age: 25,
    job: "개발자",
    city: "서울",
    country: "대한민국"
};

console.log("\n객체 구조 분해와 레스트:");
console.log("이름과 나이:", { name, age });
console.log("나머지 정보:", details);
