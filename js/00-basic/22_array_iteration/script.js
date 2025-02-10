// 배열 선언
let fruits = ["사과", "바나나", "오렌지", "포도", "딸기"];

// for 반복문으로 순회
console.log("for 반복문 사용:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}번째 과일: ${fruits[i]}`);
}

// for...of 반복문으로 순회
console.log("\nfor...of 반복문 사용:");
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach 메서드로 순회
console.log("\nforEach 메서드 사용:");
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}번째 과일: ${fruit}`);
});

// map 메서드로 새로운 배열 만들기
console.log("\nmap 메서드 사용:");
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("대문자로 변환된 과일:", upperFruits);

// filter 메서드로 조건에 맞는 요소만 선택
console.log("\nfilter 메서드 사용:");
let longFruits = fruits.filter(fruit => fruit.length > 2);
console.log("이름이 2글자보다 긴 과일:", longFruits);
