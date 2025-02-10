// 1. 기본 사용자 정의 에러
console.log("1. 기본 사용자 정의 에러:");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    try {
        if (typeof age !== "number") {
            throw new ValidationError("나이는 숫자여야 합니다.");
        }
        if (age < 0) {
            throw new ValidationError("나이는 0보다 작을 수 없습니다.");
        }
        if (age > 120) {
            throw new ValidationError("유효하지 않은 나이입니다.");
        }
        console.log("유효한 나이:", age);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("검증 에러:", error.message);
        } else {
            console.error("알 수 없는 에러:", error.message);
        }
    }
}

validateAge(25);
validateAge(-5);
validateAge("not a number");
validateAge(150);

// 2. 여러 종류의 사용자 정의 에러
console.log("\n2. 여러 종류의 사용자 정의 에러:");

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = "DatabaseError";
        this.query = query;
    }
}

// 가상의 API 호출 함수
async function fetchUserData(userId) {
    try {
        if (!userId) {
            throw new ValidationError("사용자 ID가 필요합니다.");
        }

        // 네트워크 에러 시뮬레이션
        if (userId === "404") {
            throw new NetworkError("사용자를 찾을 수 없습니다.", 404);
        }

        // 데이터베이스 에러 시뮬레이션
        if (userId === "500") {
            throw new DatabaseError("데이터베이스 쿼리 실패", "SELECT * FROM users");
        }

        return { id: userId, name: "테스트 사용자" };
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("검증 실패:", error.message);
        } else if (error instanceof NetworkError) {
            console.error(`네트워크 에러 (${error.statusCode}):`, error.message);
        } else if (error instanceof DatabaseError) {
            console.error(`데이터베이스 에러 (${error.query}):`, error.message);
        } else {
            console.error("알 수 없는 에러:", error.message);
        }
        return null;
    }
}

// 테스트
async function testFetchUser() {
    console.log(await fetchUserData("123")); // 정상 케이스
    console.log(await fetchUserData("")); // 검증 에러
    console.log(await fetchUserData("404")); // 네트워크 에러
    console.log(await fetchUserData("500")); // 데이터베이스 에러
}

testFetchUser();

// 3. 이메일 검증 에러
class EmailValidationError extends ValidationError {
    constructor(message, field) {
        super(message);
        this.name = "EmailValidationError";
        this.field = field;
    }
}

function validateEmail() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    try {
        // 이메일 형식 검사
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            throw new EmailValidationError("이메일을 입력해주세요.", "email");
        }
        
        if (!emailRegex.test(email)) {
            throw new EmailValidationError("유효하지 않은 이메일 형식입니다.", "email");
        }

        console.log("유효한 이메일:", email);
    } catch (error) {
        if (error instanceof EmailValidationError) {
            console.error(`${error.field} 필드 에러:`, error.message);
        } else {
            console.error("알 수 없는 에러:", error.message);
        }
    }
}
