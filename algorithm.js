function calculateX() {
    // Получаем введенное пользователем значение A
    let a = parseFloat(document.getElementById("inputA").value);

    // Проверяем условие
    if (a < 62) {
        let x = Math.pow(a, 2) + 4 + 5;
        document.getElementById("result").innerText = x.toFixed(4); // Округление до 4 знаков после запятой
    } else {
        let x = 1 / Math.pow(a, 2) + 4 * a + 5;
        document.getElementById("result").innerText = x.toFixed(4); 
    }
}