// break 예제
console.log("break 예제 - 3에서 멈추기:");
for (let i = 1; i <= 5; i++) {
    if (i > 3) {
        break;  // 3을 초과하면 반복문 종료
    }
    console.log(i);
}

// continue 예제
console.log("\ncontinue 예제 - 짝수만 출력:");
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        continue;  // 홀수면 건너뛰기
    }
    console.log(i);
}

// break를 사용한 배열 검색
console.log("\n배열에서 특정 값 찾기:");
let numbers = [1, 3, 5, 7, 9, 11, 13];
let searchValue = 7;
let foundIndex = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchValue) {
        foundIndex = i;
        break;  // 값을 찾으면 반복문 종료
    }
}

console.log(searchValue + "는 " + (foundIndex === -1 ? "없습니다." : foundIndex + "번 인덱스에 있습니다."));
