// 1. 기본 템플릿 리터럴
console.log("1. 기본 템플릿 리터럴:");

const name = "홍길동";
const age = 25;

// 기존 문자열 연결 방식
console.log("기존 방식: " + name + "님은 " + age + "세입니다.");

// 템플릿 리터럴 사용
console.log(`템플릿 리터럴: ${name}님은 ${age}세입니다.`);

// 2. 여러 줄 문자열
console.log("\n2. 여러 줄 문자열:");

// 기존 방식
console.log("기존 방식:\n" +
"첫 번째 줄\n" +
"두 번째 줄\n" +
"세 번째 줄");

// 템플릿 리터럴 사용
console.log(`템플릿 리터럴:
첫 번째 줄
두 번째 줄
세 번째 줄`);

// 3. 표현식 삽입
console.log("\n3. 표현식 삽입:");

const a = 10;
const b = 20;
console.log(`${a} + ${b} = ${a + b}`);

const isAdult = age >= 20;
console.log(`${name}님은 ${isAdult ? "성인" : "미성년자"}입니다.`);

// 4. 태그된 템플릿
console.log("\n4. 태그된 템플릿:");

function highlight(strings, ...values) {
    let result = "";
    
    strings.forEach((string, i) => {
        result += string;
        if (i < values.length) {
            result += `[${values[i]}]`;
        }
    });
    
    return result;
}

const product = "노트북";
const price = 1000000;
console.log(highlight`제품: ${product}, 가격: ${price}원`);

// 5. 중첩된 표현식
console.log("\n5. 중첩된 표현식:");

const items = ["사과", "바나나", "오렌지"];
console.log(`장바구니에 ${items.length}개의 항목이 있습니다:
${items.map((item, index) => `${index + 1}. ${item}`).join("\n")}`);

// 6. 템플릿 리터럴 내에서의 함수 호출
console.log("\n6. 함수 호출:");

function getGreeting(name) {
    return `안녕하세요, ${name}님!`;
}

const userName = "김철수";
console.log(`메시지: ${getGreeting(userName)}`);
