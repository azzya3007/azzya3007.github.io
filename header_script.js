// Функция для обновления активной ссылки
function setActiveLink() {
    const navLinks = document.querySelectorAll('nav a'); // Получаем все ссылки навигации
    const hash = window.location.hash; // Получаем текущий хэш из URL

    navLinks.forEach(link => {
        // Удаляем класс active из всех ссылок
        link.classList.remove('active');
        
        // Если ссылка совпадает с текущим хэшем, добавляем класс active
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
}

// Вызовем функцию при загрузке страницы
window.addEventListener('load', setActiveLink);

// Вызовем функцию при изменении хэша в URL
window.addEventListener('hashchange', setActiveLink);
