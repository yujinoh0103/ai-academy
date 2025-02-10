// 1. 기본 try-catch
console.log("1. 기본 try-catch:");

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return a / b;
    } catch (error) {
        console.error("에러 발생:", error.message);
        return null;
    }
}

console.log("10 / 2 =", divide(10, 2));
console.log("10 / 0 =", divide(10, 0));

// 2. finally 블록
console.log("\n2. finally 블록:");

function processFile(filename) {
    let file = null;
    
    try {
        console.log(`${filename} 파일을 엽니다.`);
        if (!filename) {
            throw new Error("파일 이름이 필요합니다.");
        }
        file = { name: filename, content: "파일 내용" };
        return file.content;
    } catch (error) {
        console.error("파일 처리 중 에러:", error.message);
        return null;
    } finally {
        if (file) {
            console.log(`${filename} 파일을 닫습니다.`);
            file = null;
        }
    }
}

processFile("test.txt");
processFile("");

// 3. 여러 종류의 에러 처리
console.log("\n3. 여러 종류의 에러 처리:");

function processArray(arr) {
    try {
        // TypeError 가능성
        if (!Array.isArray(arr)) {
            throw new TypeError("배열이 아닙니다.");
        }
        
        // RangeError 가능성
        if (arr.length > 100) {
            throw new RangeError("배열이 너무 깁니다.");
        }
        
        // 사용자 정의 에러 가능성
        if (arr.length === 0) {
            throw new Error("빈 배열입니다.");
        }
        
        return arr.map(x => x * 2);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("타입 에러:", error.message);
        } else if (error instanceof RangeError) {
            console.error("범위 에러:", error.message);
        } else {
            console.error("기타 에러:", error.message);
        }
        return [];
    }
}

console.log(processArray([1, 2, 3]));
console.log(processArray("not array"));
console.log(processArray([]));

// 4. 비동기 함수의 에러 처리
console.log("\n4. 비동기 함수의 에러 처리:");

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP 에러! 상태: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("데이터 가져오기 실패:", error.message);
        return null;
    }
}

// 5. 입력값 검증
function validateNumber() {
    const input = document.getElementById("numberInput");
    const value = input.value;

    try {
        // 빈 입력 체크
        if (!value) {
            throw new Error("값을 입력해주세요.");
        }

        // 숫자 변환
        const number = Number(value);

        // NaN 체크
        if (isNaN(number)) {
            throw new Error("유효한 숫자가 아닙니다.");
        }

        // 범위 체크
        if (number < 0 || number > 100) {
            throw new Error("0에서 100 사이의 숫자를 입력해주세요.");
        }

        console.log("유효한 숫자:", number);
    } catch (error) {
        console.error("입력값 검증 실패:", error.message);
    }
}
