// 기본값 매개변수
function greet(name = "손님") {
    console.log("안녕하세요, " + name + "님!");
}

console.log("기본값 매개변수:");
greet();          // 매개변수를 전달하지 않음
greet("홍길동");  // 매개변수 전달

// 여러 개의 매개변수
function introduce(name, age, city) {
    console.log("\n자기소개:");
    console.log("이름:", name);
    console.log("나이:", age);
    console.log("도시:", city);
}

introduce("민수", 20, "서울");

// 나머지 매개변수
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("\n나머지 매개변수:");
console.log("1 + 2 =", sum(1, 2));
console.log("1 + 2 + 3 =", sum(1, 2, 3));
console.log("1 + 2 + 3 + 4 =", sum(1, 2, 3, 4));

// 객체 매개변수
function printUserInfo({ name, age, city = "알 수 없음" }) {
    console.log("\n사용자 정보:");
    console.log("이름:", name);
    console.log("나이:", age);
    console.log("도시:", city);
}

let user = {
    name: "영희",
    age: 25
};

printUserInfo(user);
