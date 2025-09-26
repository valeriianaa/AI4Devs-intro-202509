document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('inputText');
  const reverseBtn = document.getElementById('reverseBtn');
  const result = document.getElementById('result');

  reverseBtn.addEventListener('click', () => {
    const text = inputText.value;
    const reversed = text.split('').reverse().join('');
    result.textContent = reversed;
  });
});