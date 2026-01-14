// 要素取得
const title = document.getElementById("title");
const description = document.getElementById("description");
const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const buttonsArea = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".choiceBtn");

const messageBox = document.createElement("div");
messageBox.id = "messageBox";
messageBox.style.position = "fixed";
messageBox.style.top = "0";
messageBox.style.left = "0";
messageBox.style.width = "100%";
messageBox.style.height = "100%";        // ここで画面全体を覆う
messageBox.style.backgroundColor = "rgba(0,0,0,0.85)";
messageBox.style.color = "rgba(255, 0, 0, 0.85)";
messageBox.style.fontSize = "30px";
messageBox.style.display = "flex";       // Flexbox
messageBox.style.flexDirection = "column";
messageBox.style.justifyContent = "center"; // 縦方向中央寄せ
messageBox.style.alignItems = "center";     // 横方向中央寄せ
messageBox.style.textAlign = "center";     // テキスト中央
messageBox.style.padding = "20px";         
messageBox.style.zIndex = "1000";          
messageBox.style.display = "none";         // 初期非表示

document.body.appendChild(messageBox);

// ステージ管理
let stage = 0;
let gameCleared = false;

// ステージデータ
const stages = [
  {
    text: "この中で救われるべきなのは誰？",
    correct: "2",
    choices: ["目を逸らす親", "私", "靴を隠したアイツ"]
  },
  {
    text: "どうして私は救われないのか？",
    correct: "1",
    choices: ["周りに味方がいないから", "本人の努力不足", "犯罪者の娘だから"]
  },
  {
    text: "私の犯した罪は何？",
    correct: "3",
    choices: ["放火", "人殺し", "桜庭 綾乃さんは無実です"]
  }
];

/*------------------------
    ゲーム開始
-------------------------*/
function startGame() {
  stage = 0;
  gameCleared = false;
  startBtn.style.display = "none";
  retryBtn.style.display = "none";
  buttonsArea.classList.remove("hidden");
  updateStage();
}

/*------------------------
    ステージ表示更新
-------------------------*/
function updateStage() {
  const current = stages[stage];
  title.textContent = `問題 ${stage + 1}`;
  description.textContent = current.text;

  buttons.forEach((btn, index) => {
    btn.textContent = current.choices[index];
    btn.disabled = false;
  });

  // 背景色をステージに応じて変更
  document.body.className = `stage-${stage}`;
}

/*------------------------
    選択肢クリック処理
-------------------------*/
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    const correct = stages[stage].correct;

    if (choice === correct) {
      stage++;
      if (stage < stages.length) {
        updateStage(); // 背景色も同時に切り替わる
      } else {
        // クリア演出
        title.textContent = "××ヶ丘高等学校放火殺人事件";
        description.textContent = "桜庭 綾乃さん（当時16歳）が全校生徒・教員を殺害し、その後校舎に火をつけた事件。犯人は事件直前に両親を殺害したとされる。";
        buttons.forEach(b => b.disabled = true);
        retryBtn.style.display = "inline-block";
        document.body.className = `stage-${stages.length}`; // クリア色

        // クリアフラグON
        gameCleared = true;
      }
    } else {
      // ゲームオーバー
      title.textContent = "ゲームオーバー";
      description.textContent = "違う";
      buttons.forEach(b => b.disabled = true);
      retryBtn.style.display = "inline-block";

      // クリアフラグはfalse（リトライ可能）
      gameCleared = false;
    }
  });
});

/*------------------------
    リトライ処理
-------------------------*/
function retryGame() {
  if (gameCleared) {
    // ゲームクリア後は中央にメッセージ
    messageBox.textContent = "私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない 私は間違ってない ";
    messageBox.style.display = "block";

    // 2秒後に自動で非表示
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 2000);
    return;
  }

  stage = 0;
  title.textContent = "ゲームスタート";
  description.textContent = "正しい選択肢を選んでください。";

  buttons.forEach(btn => btn.disabled = false);
  
  startBtn.style.display = "none";
  retryBtn.style.display = "none";
  buttonsArea.classList.remove("hidden");

  // 背景色リセット
  document.body.className = `stage-0`;

  updateStage();
}

/*------------------------
    初期設定
-------------------------*/
buttonsArea.classList.add("hidden"); // 選択肢は非表示
retryBtn.style.display = "none";     // リトライ非表示
startBtn.addEventListener("click", startGame);
retryBtn.addEventListener("click", retryGame);
