// 1. 기본적인 세션 스토리지 사용
console.log("1. 기본적인 세션 스토리지 사용:");

// 데이터 저장
sessionStorage.setItem('lastAction', '페이지 로드');
sessionStorage.setItem('timestamp', new Date().toISOString());

// 데이터 읽기
console.log('마지막 작업:', sessionStorage.getItem('lastAction'));
console.log('타임스탬프:', sessionStorage.getItem('timestamp'));

// 2. 폼 데이터 임시 저장
function saveFormData() {
    const formInput = document.getElementById('formInput');
    const data = formInput.value;
    
    try {
        sessionStorage.setItem('formData', data);
        console.log('폼 데이터가 임시 저장되었습니다.');
        updateFormStatus('저장됨');
    } catch (e) {
        console.error('저장 실패:', e);
        updateFormStatus('저장 실패');
    }
}

function loadFormData() {
    const data = sessionStorage.getItem('formData');
    if (data) {
        document.getElementById('formInput').value = data;
        updateFormStatus('불러옴');
    } else {
        updateFormStatus('저장된 데이터 없음');
    }
}

function clearFormData() {
    sessionStorage.removeItem('formData');
    document.getElementById('formInput').value = '';
    updateFormStatus('삭제됨');
}

function updateFormStatus(status) {
    console.log('폼 상태:', status);
}

// 3. 장바구니 기능
class CartManager {
    constructor() {
        this.loadCart();
    }

    loadCart() {
        try {
            const cartData = sessionStorage.getItem('cart');
            this.cart = cartData ? JSON.parse(cartData) : [];
        } catch (e) {
            console.error('장바구니 로드 실패:', e);
            this.cart = [];
        }
        this.displayCart();
    }

    saveCart() {
        try {
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
            console.log('장바구니가 저장되었습니다.');
        } catch (e) {
            console.error('장바구니 저장 실패:', e);
        }
    }

    addItem(name, price) {
        if (!name || !price) {
            console.error('상품명과 가격을 모두 입력해주세요.');
            return;
        }

        const item = {
            id: Date.now(),
            name,
            price: Number(price)
        };

        this.cart.push(item);
        this.saveCart();
        this.displayCart();
    }

    removeItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveCart();
        this.displayCart();
    }

    clearCart() {
        this.cart = [];
        sessionStorage.removeItem('cart');
        this.displayCart();
    }

    displayCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';

        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p>장바구니가 비어있습니다.</p>';
            return;
        }

        let total = 0;
        this.cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                ${item.name} - ${item.price}원
                <button onclick="cartManager.removeItem(${item.id})">삭제</button>
            `;
            cartItems.appendChild(itemElement);
            total += item.price;
        });

        const totalElement = document.createElement('div');
        totalElement.innerHTML = `<strong>총액: ${total}원</strong>`;
        cartItems.appendChild(totalElement);
    }
}

// 장바구니 관리자 인스턴스 생성
const cartManager = new CartManager();

// 장바구니 기능 연결
function addToCart() {
    const name = document.getElementById('itemName').value;
    const price = document.getElementById('itemPrice').value;
    cartManager.addItem(name, price);
}

function clearCart() {
    cartManager.clearCart();
}

// 4. 세션 스토리지 이벤트 처리
window.addEventListener('storage', function(e) {
    // 세션 스토리지는 같은 탭에서만 작동하므로,
    // 이 이벤트는 로컬 스토리지 변경시에만 발생
    if (e.storageArea === sessionStorage) {
        console.log('세션 스토리지 변경:');
        console.log('키:', e.key);
        console.log('이전 값:', e.oldValue);
        console.log('새로운 값:', e.newValue);
    }
});
