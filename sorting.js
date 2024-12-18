function sort() {
    let price = document.getElementById("price");
    let title = document.getElementById("title");
    if (price.checked) {
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse();
    }

    if (title.checked) {
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse1();
    }
}

function search() {
    if (price.checked) {
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse();
    }

    if (title.checked) {
        document.getElementById('node_for_insert').innerHTML = '';
        getResponse1();
    }
}

async function getResponse() {
    let response = await fetch('cat_script.json');
    let content = await response.text();
    console.log(content);
    content = JSON.parse(content);
    content = content.splice(0, 11);

    console.log(content);
    let key;

    content_price = content.sort((a, b) => a.price - b.price);
    content_filter = content_price.filter((product) => {
        return (
            product.title.toLowerCase().includes(key) ||
            product.description.toLowerCase().includes(key) ||
            product.price.toString().includes(key)
        );
    });

    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert");
    for (key in content_filter) {
        node_for_insert.innerHTML += `
        <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content_filter[key].img}>
        <h5 class="card-title">${content_filter[key].title}</h5>
        <p class="card-text">${content_filter[key].description} <br> Цена ${content_filter[key].price} руб.</p>
        <input type="hidden" name="vendor_code" value=${content_filter[key].vendor_code}>
        <p class="card-text">Заказать<input class="w-25" type="text" value="0" name="check" onchange="updateCart(this)"></p>
        </li>
    }
}

async function getResponse1() {
    let response = await fetch('cat_script.json');
    let content = await response.text();
    console.log(content);
    content = JSON.parse(content);
    content = content.splice(0, 11);

    console.log(content);
    let key;

    content_title = content.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    content_filter = content_title.filter((product) => {
        return (
            product.title.toLowerCase().includes(key) ||
            product.description.toLowerCase().includes(key) ||
            product.price.toString().includes(key)
        );
    });

    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert");
    for (key in content_filter) {
        node_for_insert.innerHTML += `
        <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body background-color: blue">
        <img style="width: 180px; height: 100px" class="align-self-center" src=${content_filter[key].img}>
        <h5 class="card-title">${content_filter[key].title}</h5>
        <p class="card-text">${content_filter[key].description} <br> Цена ${content_filter[key].price} руб.</p>
        <input type="hidden" name="vendor_code" value=${content_filter[key].vendor_code}>
        <p class="card-text">Заказать<input class="w-25" type="text" value="0" name="check" onchange="updateCart(this)"></p>
        </li>
    }
}

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
