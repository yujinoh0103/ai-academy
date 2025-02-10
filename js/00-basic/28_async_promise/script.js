// Promise 생성
let promise = new Promise((resolve, reject) => {
    console.log("Promise 실행 시작...");
    
    // 2초 후에 성공 또는 실패
    setTimeout(() => {
        let random = Math.random();
        if (random > 0.5) {
            resolve("성공!");  // 성공 시
        } else {
            reject("실패...");  // 실패 시
        }
    }, 2000);
});

// Promise 사용
console.log("Promise 처리 시작");

promise
    .then((result) => {
        console.log("Promise 성공:", result);
    })
    .catch((error) => {
        console.log("Promise 실패:", error);
    });

// Promise 체이닝
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("\nPromise 체이닝 시작");

delay(1000)
    .then(() => {
        console.log("1초 지남");
        return delay(1000);
    })
    .then(() => {
        console.log("2초 지남");
        return delay(1000);
    })
    .then(() => {
        console.log("3초 지남");
    });

// async/await 사용
async function runSequence() {
    console.log("\nasync/await 시작");
    
    try {
        await delay(1000);
        console.log("1초 대기 완료");
        
        await delay(1000);
        console.log("2초 대기 완료");
        
        await delay(1000);
        console.log("3초 대기 완료");
    } catch (error) {
        console.log("에러 발생:", error);
    }
}

runSequence();
