// 기본 for 반복문
console.log("1부터 5까지 세기:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 배열을 이용한 for 반복문
console.log("\n과일 목록:");
let fruits = ["사과", "바나나", "오렌지", "포도"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of 반복문
console.log("\nfor...of로 과일 목록 출력:");
for (let fruit of fruits) {
    console.log(fruit);
}
