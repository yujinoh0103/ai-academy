// 샘플 데이터
const products = [
    { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
    { id: 2, name: "스마트폰", price: 800000, category: "전자제품" },
    { id: 3, name: "책상", price: 150000, category: "가구" },
    { id: 4, name: "의자", price: 80000, category: "가구" },
    { id: 5, name: "마우스", price: 50000, category: "전자제품" }
];

// 1. map() 메서드
console.log("1. map() 메서드 예제:");

// 제품 이름만 추출
const productNames = products.map(product => product.name);
console.log("제품 이름 목록:", productNames);

// 가격에 10% 할인 적용
const discountedProducts = products.map(product => ({
    ...product,
    price: product.price * 0.9
}));
console.log("할인된 제품 목록:", discountedProducts);

// 2. filter() 메서드
console.log("\n2. filter() 메서드 예제:");

// 전자제품만 필터링
const electronics = products.filter(product => product.category === "전자제품");
console.log("전자제품 목록:", electronics);

// 10만원 이상인 제품 필터링
const expensiveProducts = products.filter(product => product.price > 100000);
console.log("고가 제품 목록:", expensiveProducts);

// 3. reduce() 메서드
console.log("\n3. reduce() 메서드 예제:");

// 총 가격 계산
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("총 가격:", totalPrice);

// 카테고리별 제품 수 계산
const categoryCount = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
}, {});
console.log("카테고리별 제품 수:", categoryCount);

// 4. 메서드 체이닝
console.log("\n4. 메서드 체이닝 예제:");

// 전자제품의 할인된 가격 총합 계산
const discountedElectronicsTotal = products
    .filter(product => product.category === "전자제품")
    .map(product => product.price * 0.9)
    .reduce((sum, price) => sum + price, 0);

console.log("할인된 전자제품 총 가격:", discountedElectronicsTotal);

// 5. 실제 활용 예제
console.log("\n5. 실제 활용 예제:");

// 주문 데이터
const orders = [
    { id: 1, products: ["노트북", "마우스"], total: 1250000 },
    { id: 2, products: ["스마트폰"], total: 800000 },
    { id: 3, products: ["책상", "의자"], total: 230000 }
];

// 주문 분석
const orderAnalysis = orders
    .map(order => ({
        id: order.id,
        productCount: order.products.length,
        total: order.total
    }))
    .filter(order => order.total > 500000)
    .reduce((acc, order) => {
        acc.orderCount++;
        acc.totalRevenue += order.total;
        acc.averageProductCount += order.productCount;
        return acc;
    }, { orderCount: 0, totalRevenue: 0, averageProductCount: 0 });

// 평균 계산
orderAnalysis.averageProductCount /= orderAnalysis.orderCount;

console.log("주문 분석 결과:", orderAnalysis);
