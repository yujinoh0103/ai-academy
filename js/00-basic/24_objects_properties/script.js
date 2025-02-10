// 객체 생성
let person = {
    name: "홍길동",
    age: 25,
    city: "서울"
};

// 속성 접근하기
console.log("점 표기법으로 접근:");
console.log("이름:", person.name);
console.log("나이:", person.age);

console.log("\n대괄호 표기법으로 접근:");
console.log("이름:", person["name"]);
console.log("도시:", person["city"]);

// 속성 수정하기
person.age = 26;
person["city"] = "부산";
console.log("\n속성 수정 후:", person);

// 새로운 속성 추가하기
person.job = "학생";
person["hobby"] = "독서";
console.log("\n새로운 속성 추가 후:", person);

// 속성 삭제하기
delete person.hobby;
console.log("\n속성 삭제 후:", person);

// 속성 존재 여부 확인
console.log("\n속성 존재 여부:");
console.log("name 속성 존재?", "name" in person);
console.log("hobby 속성 존재?", "hobby" in person);
console.log("age 속성 존재?", person.hasOwnProperty("age"));
