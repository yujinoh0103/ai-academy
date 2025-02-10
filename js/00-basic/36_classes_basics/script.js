// 1. 기본 클래스 정의
console.log("1. 기본 클래스:");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }

    getInfo() {
        return `${this.name}님은 ${this.age}세입니다.`;
    }
}

const person1 = new Person("홍길동", 25);
person1.sayHello();
console.log(person1.getInfo());

// 2. getter와 setter
console.log("\n2. getter와 setter:");

class BankAccount {
    constructor(owner, balance) {
        this._owner = owner;
        this._balance = balance;
    }

    // getter
    get balance() {
        return this._balance;
    }

    // setter
    set balance(amount) {
        if (amount < 0) {
            console.log("잔액은 0보다 작을 수 없습니다.");
            return;
        }
        this._balance = amount;
    }

    // 메서드
    deposit(amount) {
        this.balance += amount;
        console.log(`${amount}원이 입금되었습니다. 현재 잔액: ${this.balance}원`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("잔액이 부족합니다.");
            return;
        }
        this.balance -= amount;
        console.log(`${amount}원이 출금되었습니다. 현재 잔액: ${this.balance}원`);
    }
}

const account = new BankAccount("홍길동", 1000);
console.log(`초기 잔액: ${account.balance}원`);
account.deposit(500);
account.withdraw(200);
account.balance = -100; // 오류 메시지 출력

// 3. 필드 선언
console.log("\n3. 클래스 필드:");

class Product {
    // 클래스 필드
    name = "제품";
    price = 0;
    #privateField = "비공개"; // private 필드

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrivateField() {
        return this.#privateField;
    }
}

const product = new Product("노트북", 1000000);
console.log(`제품명: ${product.name}, 가격: ${product.price}원`);
console.log(`비공개 필드: ${product.getPrivateField()}`);

// 4. 메서드 오버라이딩
console.log("\n4. 메서드 오버라이딩:");

class CustomProduct extends Product {
    getInfo() {
        return `${this.name} (${this.price}원)`;
    }
}

const customProduct = new CustomProduct("태블릿", 500000);
console.log(customProduct.getInfo());
