// 배열 구조 분해
console.log("1. 배열 구조 분해:");

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log("첫 번째 숫자:", first);
console.log("두 번째 숫자:", second);
console.log("나머지 숫자들:", rest);

// 기본값 설정
const [a, b, c = 3] = [1, 2];
console.log("\n기본값 설정:");
console.log("a:", a, "b:", b, "c:", c);

// 객체 구조 분해
console.log("\n2. 객체 구조 분해:");

const person = {
    name: "홍길동",
    age: 25,
    location: {
        city: "서울",
        country: "대한민국"
    }
};

const { name, age, location: { city } } = person;
console.log("이름:", name);
console.log("나이:", age);
console.log("도시:", city);

// 변수 이름 변경
console.log("\n변수 이름 변경:");
const { name: userName, age: userAge } = person;
console.log("사용자 이름:", userName);
console.log("사용자 나이:", userAge);

// 함수 매개변수의 구조 분해
console.log("\n3. 함수 매개변수 구조 분해:");

function printUserInfo({ name, age, location: { city } = {} } = {}) {
    console.log(`${name}님은 ${age}세이고 ${city}에 살고 있습니다.`);
}

printUserInfo(person);

// 중첩된 객체 구조 분해
console.log("\n4. 중첩된 객체 구조 분해:");

const company = {
    name: "테크 기업",
    address: {
        street: "디지털로",
        city: "서울",
        country: "대한민국"
    },
    employees: ["홍길동", "김철수", "이영희"]
};

const {
    name: companyName,
    address: { city: companyCity },
    employees: [firstEmployee, ...otherEmployees]
} = company;

console.log("회사명:", companyName);
console.log("회사 도시:", companyCity);
console.log("첫 번째 직원:", firstEmployee);
console.log("다른 직원들:", otherEmployees);
