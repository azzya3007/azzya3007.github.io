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

