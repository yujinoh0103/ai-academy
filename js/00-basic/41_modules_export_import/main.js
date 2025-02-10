// 모듈 가져오기
import Calculator, { 
    add, 
    subtract, 
    PI, 
    E, 
    multiply, 
    divide, 
    MathUtils 
} from './math.js';

// 1. 개별 함수 사용
console.log("1. 개별 함수:");
console.log("add(5, 3) =", add(5, 3));
console.log("subtract(5, 3) =", subtract(5, 3));

// 2. 클래스 사용
console.log("\n2. Calculator 클래스:");
const calc = new Calculator();
console.log("calc.add(5) =", calc.add(5));
console.log("calc.subtract(3) =", calc.subtract(3));
console.log("최종 값:", calc.getValue());

// 3. 상수 사용
console.log("\n3. 수학 상수:");
console.log("PI =", PI);
console.log("E =", E);

// 4. 추가 함수 사용
console.log("\n4. 추가 함수:");
console.log("multiply(4, 3) =", multiply(4, 3));
try {
    console.log("divide(6, 2) =", divide(6, 2));
    console.log("divide(6, 0) =", divide(6, 0));
} catch (error) {
    console.error("나눗셈 에러:", error.message);
}

// 5. 유틸리티 객체 사용
console.log("\n5. 수학 유틸리티:");
console.log("square(4) =", MathUtils.square(4));
console.log("cube(3) =", MathUtils.cube(3));
console.log("power(2, 3) =", MathUtils.power(2, 3));
