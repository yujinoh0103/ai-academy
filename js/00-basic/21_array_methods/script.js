// 배열 선언
let fruits = ["사과", "바나나", "오렌지"];
console.log("초기 배열:", fruits);

// push: 배열 끝에 요소 추가
console.log("\npush 메서드:");
fruits.push("포도");
console.log("push('포도') 후:", fruits);

// unshift: 배열 앞에 요소 추가
console.log("\nunshift 메서드:");
fruits.unshift("딸기");
console.log("unshift('딸기') 후:", fruits);

// pop: 배열 끝에서 요소 제거
console.log("\npop 메서드:");
let lastFruit = fruits.pop();
console.log("제거된 마지막 과일:", lastFruit);
console.log("pop() 후:", fruits);

// shift: 배열 앞에서 요소 제거
console.log("\nshift 메서드:");
let firstFruit = fruits.shift();
console.log("제거된 첫 과일:", firstFruit);
console.log("shift() 후:", fruits);

// join: 배열을 문자열로 결합
console.log("\njoin 메서드:");
console.log("join():", fruits.join());  // 기본 구분자 ','
console.log("join(' - '):", fruits.join(" - "));

// indexOf: 요소의 인덱스 찾기
console.log("\nindexOf 메서드:");
console.log("'바나나'의 인덱스:", fruits.indexOf("바나나"));
console.log("존재하지 않는 과일의 인덱스:", fruits.indexOf("키위"));
