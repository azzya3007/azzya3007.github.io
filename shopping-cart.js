let cartItems = [];

// Функция для обновления корзины
function updateCart(input) {
    let productId = input.dataset.id;
    let quantity = parseInt(input.value);
    let existingItemIndex = cartItems.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1 && quantity === 0) {
        cartItems.splice(existingItemIndex, 1); // Удаляем товар из корзины, если количество стало 0
    } else if (quantity > 0) {
        if (existingItemIndex === -1) {
            cartItems.push({ id: productId, quantity: quantity }); // Добавляем товар в корзину
        } else {
            cartItems[existingItemIndex].quantity = quantity; // Обновляем количество товара в корзине
        }
    }

    renderCart(); // Рендерим корзину
}

// Функция для рендера корзины
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    if (cartItems.length === 0) {
        cartItemsContainer.innerText = "Корзина пустая";
        document.getElementById("checkout-button").disabled = true;
    } else {
        cartItems.forEach(cartItem => {
            let cartItemElement = `
            <li>${cartItem.quantity}x ${getProductById(cartItem.id).title}: ${cartItem.quantity * getProductById(cartItem.id).price} руб.</li>
            cartItemsContainer.appendChild(cartItemElement);
        });
        document.getElementById("checkout-button").disabled = false;
    }
}

// Функция для получения товара по id
function getProductById(id) {
    return products.find(product => product.id === id);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

document.getElementById("checkout-button").addEventListener("click", function() {
    alert("Переход на страницу обработки заказа");
});

document.addEventListener('load', () => {
    renderCart();
});