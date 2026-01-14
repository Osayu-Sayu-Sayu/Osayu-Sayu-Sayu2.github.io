const btn2 = document.getElementById('btn2');
const btn2Text = document.getElementById('btn2-text');

btn2.addEventListener('click', () => {
  // ボタンクリックでhiddenクラスを付け外しする
  btn2Text.classList.toggle('hidden');
});
