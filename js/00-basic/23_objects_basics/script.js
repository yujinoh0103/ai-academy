// 객체 생성
let person = {
    name: "홍길동",
    age: 25,
    city: "서울"
};

// 객체 출력
console.log("person 객체:", person);

// 빈 객체 생성
let emptyObject = {};
console.log("\n빈 객체:", emptyObject);

// 다양한 타입의 속성을 가진 객체
let student = {
    name: "김철수",
    age: 18,
    isStudent: true,
    scores: [90, 85, 95],
    address: {
        city: "서울",
        district: "강남구"
    }
};

console.log("\n다양한 타입의 속성을 가진 객체:", student);

// 객체 생성자 사용
let car = new Object();
car.brand = "현대";
car.model = "소나타";
car.year = 2023;

console.log("\n생성자로 만든 객체:", car);
