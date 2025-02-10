// 1. 기본 상속
console.log("1. 기본 상속:");

// 부모 클래스
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}이(가) 소리를 냅니다.`);
    }
}

// 자식 클래스
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 부모 클래스의 constructor 호출
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name}이(가) 멍멍 짖습니다.`);
    }

    fetch() {
        console.log(`${this.name}이(가) 공을 가져옵니다.`);
    }
}

const dog = new Dog("멍멍이", "진돗개");
dog.speak();
dog.fetch();

// 2. 다중 레벨 상속
console.log("\n2. 다중 레벨 상속:");

// 부모 클래스
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} 시동을 겁니다.`);
    }
}

// 첫 번째 자식 클래스
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model}을(를) 운전합니다.`);
    }
}

// 두 번째 자식 클래스
class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }

    charge() {
        console.log(`${this.brand} ${this.model}을(를) 충전합니다. 배터리 용량: ${this.batteryCapacity}kWh`);
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", 75);
tesla.start();
tesla.drive();
tesla.charge();

// 3. super 키워드 활용
console.log("\n3. super 키워드 활용:");

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getInfo() {
        return `이름: ${this.name}, ID: ${this.id}`;
    }
}

class Manager extends Employee {
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }

    getInfo() {
        return `${super.getInfo()}, 부서: ${this.department}`;
    }
}

const manager = new Manager("홍길동", "M123", "개발팀");
console.log(manager.getInfo());

// 4. instanceof 연산자
console.log("\n4. instanceof 연산자:");

console.log("manager instanceof Manager:", manager instanceof Manager);
console.log("manager instanceof Employee:", manager instanceof Employee);
console.log("tesla instanceof ElectricCar:", tesla instanceof ElectricCar);
console.log("tesla instanceof Vehicle:", tesla instanceof Vehicle);
