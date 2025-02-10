// 1. 정적 메서드
console.log("1. 정적 메서드:");

class MathOperations {
    static add(x, y) {
        return x + y;
    }

    static subtract(x, y) {
        return x - y;
    }

    static multiply(x, y) {
        return x * y;
    }
}

console.log("덧셈:", MathOperations.add(5, 3));
console.log("뺄셈:", MathOperations.subtract(5, 3));
console.log("곱셈:", MathOperations.multiply(5, 3));

// 2. 정적 프로퍼티
console.log("\n2. 정적 프로퍼티:");

class Configuration {
    static VERSION = "1.0.0";
    static API_URL = "https://api.example.com";
    static TIMEOUT = 5000;

    static getConfig() {
        return {
            version: this.VERSION,
            apiUrl: this.API_URL,
            timeout: this.TIMEOUT
        };
    }
}

console.log("버전:", Configuration.VERSION);
console.log("설정:", Configuration.getConfig());

// 3. 정적 메서드와 일반 메서드 비교
console.log("\n3. 정적 메서드와 일반 메서드 비교:");

class Calculator {
    // 인스턴스 프로퍼티
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    // 인스턴스 메서드
    add(x) {
        this.value += x;
        return this.value;
    }

    // 정적 메서드
    static sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
}

const calc = new Calculator(10);
console.log("인스턴스 메서드:", calc.add(5));
console.log("정적 메서드:", Calculator.sum(1, 2, 3, 4, 5));

// 4. 유틸리티 클래스
console.log("\n4. 유틸리티 클래스:");

class StringUtils {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static reverse(str) {
        return str.split("").reverse().join("");
    }

    static countVowels(str) {
        return (str.match(/[aeiou]/gi) || []).length;
    }
}

const text = "hello world";
console.log("원본:", text);
console.log("대문자로:", StringUtils.capitalize(text));
console.log("뒤집기:", StringUtils.reverse(text));
console.log("모음 개수:", StringUtils.countVowels(text));

// 5. 팩토리 메서드 패턴
console.log("\n5. 팩토리 메서드 패턴:");

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    static createAdmin(name) {
        return new User(name, "admin");
    }

    static createGuest(name) {
        return new User(name, "guest");
    }

    getInfo() {
        return `${this.name} (${this.role})`;
    }
}

const admin = User.createAdmin("관리자");
const guest = User.createGuest("방문자");

console.log("관리자:", admin.getInfo());
console.log("방문자:", guest.getInfo());
