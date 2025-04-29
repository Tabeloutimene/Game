let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = '⛔ Please enter a number between 1 and 100!';
  } else if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    message.style.color = '#90ee90';
    checkBtn.disabled = true;
    resetBtn.style.display = 'inline-block';
  } else if (guess < secretNumber) {
    message.textContent = '📈 Too low!';
  } else if (guess > secretNumber) {
    message.textContent = '📉 Too high!';
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
});

resetBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = '';
  attemptsText.textContent = '';
  guessInput.value = '';
  checkBtn.disabled = false;
  resetBtn.style.display = 'none';
});
