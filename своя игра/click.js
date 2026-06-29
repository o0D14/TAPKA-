
let score = 0;
const balanceText = document.getElementById('balance');
const clickButton = document.getElementById('Tap');

clickButton.addEventListener('click', () => {
  score = score + 1;
  balanceText.textContent = 'Баланс: ' + score; 
});