// Массив объектов с данными о товарах
const products = [
    { id: 1, imageUrl: '../images/shariki.jpg', title: 'Создание фотозоны', description: 'Уникальные запоминающиеся фотографии' },
    { id: 2, imageUrl: '../images/', title: 'Услуги тамады', description: 'Описание товара 2' },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Услуги ведущего', description: 'Описание товара 3' },
    { id: 4, imageUrl: 'path/to/product3.jpg', title: 'Услуги аниматора', description: 'Описание товара 3' },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Свадебное оформление', description: 'Описание товара 3' },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Конкурсы', description: 'Описание товара 3' },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Детские конкурсы', description: 'Описание товара 3' },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Алкоконкурсы', description: 'Описание товара 3' },
    { id: 3, imageUrl: 'path/to/product3.jpg', title: 'Услуги ведущего', description: 'Описание товара 3' },
];
let cart = [];
function addToCart(productId, quantity) {
    const existingItemIndex = cart.findIndex(item => item.productId === productId);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }
    updateCart();
}
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

   
