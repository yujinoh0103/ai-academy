// while 반복문
console.log("5부터 1까지 카운트다운:");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

// do...while 반복문
console.log("\ndo...while 반복문:");
let num = 1;
do {
  console.log(num + "번 실행");
  num++;
} while (num <= 3);

// while을 사용한 반복 출력
console.log("\n과일 목록 출력하기:");
let fruitIndex = 0;
while (fruitIndex < 3) {
  let fruit;
  if (fruitIndex === 0) {
    fruit = "사과";
  } else if (fruitIndex === 1) {
    fruit = "바나나";
  } else {
    fruit = "오렌지";
  }
  console.log(fruit);
  fruitIndex++;
}
