// 1. 개별 내보내기
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// 2. 기본값 내보내기
export default class Calculator {
    constructor() {
        this.value = 0;
    }

    add(x) {
        this.value += x;
        return this.value;
    }

    subtract(x) {
        this.value -= x;
        return this.value;
    }

    getValue() {
        return this.value;
    }
}

// 3. 상수 내보내기
export const PI = 3.14159;
export const E = 2.71828;

// 4. 함수 내보내기
export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) throw new Error("0으로 나눌 수 없습니다.");
    return a / b;
}

// 5. 객체로 묶어서 내보내기
const MathUtils = {
    square: x => x * x,
    cube: x => x * x * x,
    power: (base, exp) => Math.pow(base, exp)
};

export { MathUtils };
