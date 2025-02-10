// setTimeout 예제
console.log("프로그램 시작");

setTimeout(function() {
    console.log("3초 후 실행됨!");
}, 3000);

console.log("프로그램 계속 실행 중...");

// 여러 개의 타이머
setTimeout(function() {
    console.log("1초 후 실행!");
}, 1000);

setTimeout(function() {
    console.log("2초 후 실행!");
}, 2000);

// setInterval 예제
let count = 1;
let intervalId = setInterval(function() {
    console.log(count + "초 경과");
    count++;
    
    if (count > 5) {
        clearInterval(intervalId);
        console.log("인터벌 종료!");
    }
}, 1000);

// 콜백 함수 예제
function findUser(id, callback) {
    console.log("\n사용자 검색 시작...");
    setTimeout(function() {
        let user = {
            id: id,
            name: "홍길동",
            email: "hong@example.com"
        };
        callback(user);
    }, 2000);
}

findUser(1, function(user) {
    console.log("사용자를 찾았습니다:", user);
});
