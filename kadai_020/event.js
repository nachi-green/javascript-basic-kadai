const btn = document.getElementById('btn');

const Text = document.getElementById('text');

btn.addEventListener('click', () => {
    Text.textContent = 'ボタンをクリックしました';
});