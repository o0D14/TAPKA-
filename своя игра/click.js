
let score = 0;
const balanceText = document.getElementById('bal');
const clickButton = document.getElementById('Tap');

clickButton.addEventListener('click', () => {
  score = score + 1;
  balanceText.textContent = 'Баланс: ' + score; 
});