const products = [
    { id: 1, imageUrl: '../images/shariki.jpg', title: 'Создание фотозоны', description: 'Уникальные запоминающиеся фотографии', price: 1000 }, // добавили поле "price"
    { id: 2, imageUrl: '../images/', title: 'Услуги тамады', description: 'Описание товара 2', price: 2000 },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Услуги ведущего', description: 'Описание товара 3', price: 3000 },
    { id: 4, imageUrl: 'path/to/product3.jpg', title: 'Услуги аниматора', description: 'Описание товара 3', price: 4000 },
    { id: 5, imageUrl: 'path/to/product3.jpg', title: 'Свадебное оформление', description: 'Описание товара 3', price: 5000 }, // исправили дублирующийся ID
    { id: 6, imageUrl: 'path/to/product3.jpg', title: 'Конкурсы', description: 'Описание товара 3', price: 6000 },
    { id: 7, imageUrl: 'path/to/product3.jpg', title: 'Детские конкурсы', description: 'Описание товара 3', price: 7000 },
    { id: 8, imageUrl: 'path/to/product3.jpg', title: 'Алкоконкурсы', description: 'Описание товара 3', price: 8000 },
    { id: 9, imageUrl: 'path/to/product3.jpg', title: 'Услуги ведущего', description: 'Описание товара 3', price: 9000 },
];

let cart = [];

function addToCart(productId, quantity) {
    const existingItemIndex = cart.findIndex(item => item.productId === productId);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push({ productId, quantity });
        }
    }
    updateCart(); // Предполагаю, что эта функция обновляет содержимое корзины в DOM
}

function updateCart() {
    const cartContainer = document.querySelector('.cart-container'); // Инициализация контейнера для корзины
    cartContainer.innerHTML = ''; // Очистка содержимого контейнера перед рендерингом новых данных

    let totalAmount = 0;
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (!product) return;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';

        const productTitle = document.createElement('span');
        productTitle.textContent = `${product.title}: `;
        cartItemDiv.appendChild(productTitle);

        const productQuantity = document.createElement('span');
        productQuantity.textContent = `x${cartItem.quantity}`;
        cartItemDiv.appendChild(productQuantity);

        const productTotalPrice = document.createElement('span');
        const itemTotalPrice = product.price * cartItem.quantity;
        productTotalPrice.textContent = ` ${itemTotalPrice} руб.`;
        cartItemDiv.appendChild(productTotalPrice);

        cartContainer.appendChild(cartItemDiv);

        totalAmount += itemTotalPrice;
    });

    const cartTotalDiv = document.createElement('div');
    cartTotalDiv.className = 'cart-total';
    cartTotalDiv.textContent = `Общая сумма: ${totalAmount} руб.`;
    cartContainer.appendChild(cartTotalDiv);
}

// Функция для генерации блока товара
function createProductBlock(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Добавляем изображение
    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productDiv.appendChild(productImage);

    // Добавляем заголовок
    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;
    productDiv.appendChild(productTitle);

    // Добавляем описание
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productDiv.appendChild(productDescription);

    return productDiv;
}

// Вставляем все товары в контейнер
const container = document.getElementById('products-container');
products.forEach((product) => {
    const productBlock = createProductBlock(product);
    container.appendChild(productBlock);
});

   
