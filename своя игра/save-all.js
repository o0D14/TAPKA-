// 1. Браузер заходит в память и ищет сохранённый баланс. 
// Если игрок зашел впервые и там пусто, ставим 0.
let score = Number(localStorage.getItem('playerScore')) || 0;

// 2. Находим кнопку "Tap" и текст "balance" на странице
const balanceText = document.getElementById('bal');
const clickButton = document.getElementById('Tap');

// 3. Сразу же показываем игроку его сохранённый баланс, как только он открыл сайт
balanceText.textContent = '🐾: ' + score;

// 4. Слушаем клики по кнопке
clickButton.addEventListener('click', () => {
    score = score + 1;                            // Прибавляем единицу
    balanceText.textContent = '🐾: ' + score; // Меняем цифру на экране
    
    // 5. САМО СОХРАНЕНИЕ: записываем новое число в память браузера
    localStorage.setItem('playerScore', score);
});