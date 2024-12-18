const products = [
    { id: 1, imageUrl: '../images/shariki.jpg', title: 'Создание фотозоны', description: 'Уникальные запоминающиеся фотографии', price: 1000 },
    { id: 2, imageUrl: '../images/', title: 'Услуги тамады', description: 'Описание товара 2', price: 2000 },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Услуги ведущего', description: 'Описание товара 3', price: 3000 },
    { id: 4, imageUrl: 'path/to/product3.jpg', title: 'Услуги аниматора', description: 'Описание товара 3', price: 4000 },
    { id: 5, imageUrl: 'path/to/product3.jpg', title: 'Свадебное оформление', description: 'Описание товара 3', price: 5000 },
    { id: 6, imageUrl: 'path/to/product3.jpg', title: 'Конкурсы', description: 'Описание товара 3', price: 6000 },
    { id: 7, imageUrl: 'path/to/product3.jpg', title: 'Детские конкурсы', description: 'Описание товара 3', price: 7000 },
    { id: 8, imageUrl: 'path/to/product3.jpg', title: 'Алкоконкурсы', description: 'Описание товара 3', price: 8000 },
    { id: 9, imageUrl: 'path/to/product3.jpg', title: 'Услуги ведущего', description: 'Описание товара 3', price: 9000 },
];

let cart = [];

document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
});

function sortProducts(sortBy) {
    if (sortBy === 'title') {
        products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price') {
        products.sort((a, b) => a.price - b.price);
    }
    renderProducts();
}

function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchInput)
    );
    renderProducts(filteredProducts);
}

function renderProducts(productsToRender = products) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    productsToRender.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Изображение
        const productImage = document.createElement('img');
        productImage.src = product.imageUrl;
        productDiv.appendChild(productImage);

        // Заголовок
        const productTitle = document.createElement('h3');
        productTitle.textContent = product.title;
        productDiv.appendChild(productTitle);

        // Описание
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        // Цена
        const productPrice = document.createElement('p');
        productPrice.textContent = `Цена: ${product.price} руб.`;
        productDiv.appendChild(productPrice);

        // Поле ввода количества
        const inputLabel = document.createElement('label');
        inputLabel.textContent = 'Количество: ';
        productDiv.appendChild(inputLabel);

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = 1; // Начальное значение
        quantityInput.min = 1;   // Минимум 1 товар
        productDiv.appendChild(quantityInput);

        // Кнопка добавления в корзину
        const addButton = document.createElement('button');
        addButton.textContent = 'Добавить в корзину';
        addButton.onclick = () => addToCart(product.id, parseInt(quantityInput.value));
        productDiv.appendChild(addButton);

        container.appendChild(productDiv);
    });
}

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
    updateCart();
}

function updateCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';

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

function submitOrder() 
   
