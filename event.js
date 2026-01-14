
// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidをもつHTML要素を取得し、定数に代入する
const text = document.getElementById('newText');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  //newTextに「ボタンをクリックしました」というテキストを追加する
  text.textContent = 'ボタンをクリックしました';
  console.log(text);
})
