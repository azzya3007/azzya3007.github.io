function openImage(event) {
    event.preventDefault(); // Остановить выполнение ссылки по умолчанию
    const largeImageUrl = event.currentTarget.href; // Получить URL большого изображения

    // Открыть новое окно с большим изображением
    window.open(largeImageUrl, '_blank', 'width=600,height=400'); 
}