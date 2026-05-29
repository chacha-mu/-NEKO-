// 1. 全13種類の猫種データ
const cats = {
    "スコティッシュフォールド": { score: 0, desc: "折れた耳が特徴の人気猫。おっとりしていて人懐っこいです。" },
    "マンチカン": { score: 0, desc: "短い足がかわいい猫。遊ぶことが大好きです。" },
    "ラグドール": { score: 0, desc: "ふわふわの毛と青い目が魅力の癒し系猫です。" },
    "アメリカンショートヘア": { score: 0, desc: "元気いっぱいで活発。模様がとても美しい猫です。" },
    "ロシアンブルー": { score: 0, desc: "美しいグレーの毛並みが特徴。落ち着いた性格です。" },
    "ノルウェージャンフォレストキャット": { score: 0, desc: "大型でふわふわ。寒さに強い北欧生まれの猫です。" },
    "ベンガル": { score: 0, desc: "ヒョウ柄のような模様が特徴。運動神経が抜群です。" },
    "ペルシャ": { score: 0, desc: "長い毛と優雅な見た目が人気の高級感ある猫です。" },
    "シャム": { score: 0, desc: "青い目が特徴。人と遊ぶことが大好きな猫です。" },
    "メインクーン": { score: 0, desc: "大型でふわふわ。とても優しい性格をしています。" },
    "エキゾチックショートヘア": { score: 0, desc: "ぺちゃんこ顔がかわいい癒し系の猫です。" },
    "サイベリアン": { score: 0, desc: "寒さに強く、モフモフした毛並みが特徴です。" },
    "日本猫": { score: 0, desc: "頑丈で筋肉質な体型で短い毛、丸顔が特徴の猫です。" }
};

// 2. 診断の質問データ（5問）
const questions = [
    {
        text: "Q1. 猫の毛並みの好みはどちらが近い？",
        answers: [
            { text: "モフモフでボリューミーな長毛種が好き", scores: { "ラグドール": 4, "ノルウェージャンフォレストキャット": 4, "ペルシャ": 5, "メインクーン": 4, "サイベリアン": 5 } },
            { text: "スッキリしていてお手入れが楽な短毛種が好き", scores: { "スコティッシュフォールド": 3, "マンチカン": 3, "アメリカンショートヘア": 4, "ロシアンブルー": 4, "ベンガル": 4, "シャム": 4, "エキゾチックショートヘア": 3, "日本猫": 5 } }
        ]
    },
    {
        text: "Q2. お家でのあなたの過ごし方は？",
        answers: [
            { text: "ソファでのんびり読書や映画を見たり、静かに過ごしたい", scores: { "スコティッシュフォールド": 4, "ラグドール": 4, "ロシアンブルー": 5, "ペルシャ": 5, "エキゾチックショートヘア": 5 } },
            { text: "部屋の片付けをしたり趣味に熱中したり、アクティブに動きたい", scores: { "マンチカン": 4, "アメリカンショートヘア": 4, "ノルウェージャンフォレストキャット": 3, "ベンガル": 5, "シャム": 4, "メインクーン": 3, "サイベリアン": 3, "日本猫": 4 } }
        ]
    },
    {
        text: "Q3. 猫と一緒にどんな風に遊びたい？",
        answers: [
            { text: "おもちゃを全力で追いかけ回して、元気に走り回ってほしい！", scores: { "マンチカン": 4, "アメリカンショートヘア": 5, "ベンガル": 5, "シャム": 5, "日本猫": 4 } },
            { text: "膝の上やまったりした空間で、おだやかに癒やしてほしい", scores: { "スコティッシュフォールド": 5, "ラグドール": 5, "ロシアンブルー": 3, "ペルシャ": 4, "メインクーン": 4, "エキゾチックショートヘア": 4, "サイベリアン": 4, "ノルウェージャンフォレストキャット": 3 } }
        ]
    },
    {
        text: "Q4. 猫に求める理想の「サイズ感」や「存在感」は？",
        answers: [
            { text: "抱きごたえのある、大きくてたくましい体格", scores: { "ノルウェージャンフォレストキャット": 5, "メインクーン": 5, "サイベリアン": 5, "日本猫": 2 } },
            { text: "日本の住宅でも飼いやすい、標準〜やや小柄な体格", scores: { "スコティッシュフォールド": 4, "マンチカン": 5, "ラグドール": 2, "アメリカンショートヘア": 4, "ロシアンブルー": 4, "ベンガル": 3, "ペルシャ": 3, "シャム": 4, "エキゾチックショートヘア": 4 } }
        ]
    },
    {
        text: "Q5. あなた自身の性格や、お部屋の環境は？",
        answers: [
            { text: "どちらかといえば寂しがり屋で、いつも一緒にいたい", scores: { "スコティッシュフォールド": 4, "マンチカン": 4, "ラグドール": 5, "シャム": 5, "メインクーン": 4 } },
            { text: "お互いに一人の時間を大切にする、自立した関係が良い", scores: { "アメリカンショートヘア": 3, "ロシアンブルー": 5, "ノルウェージャンフォレストキャット": 4, "ベンガル": 3, "ペルシャ": 5, "エキゾチックショートヘア": 4, "サイベリアン": 4, "日本猫": 5 } }
        ]
    }
];

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    for (let cat in cats) { cats[cat].score = 0; }
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = currentQuestion.text;
    
    const container = document.getElementById("answer-buttons");
    container.innerHTML = "";
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => handleAnswer(answer.scores));
        container.appendChild(button);
    });
}

function handleAnswer(answerScores) {
    for (let cat in answerScores) {
        if (cats[cat]) {
            cats[cat].score += answerScores[cat];
        }
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    
    const sortedCats = Object.keys(cats).map(name => {
        return { name: name, score: cats[name].score, desc: cats[name].desc };
    }).sort((a, b) => b.score - a.score);
    
    const resultContainer = document.getElementById("result-rankings");
    resultContainer.innerHTML = "";
    
    // スコア上位3件をループ処理でカード生成
    for (let i = 0; i < 3; i++) {
        const cat = sortedCats[i];
        const rankCard = document.createElement("div");
        rankCard.classList.add("rank-item");
        rankCard.innerHTML = `
            <div class="rank-content">
                <div class="rank-title">第 ${i + 1} 位<br>${cat.name}</div>
                <div class="rank-desc">${cat.desc}</div>
            </div>
        `;
        resultContainer.appendChild(rankCard);
    }
}

document.getElementById("restart-btn").addEventListener("click", startQuiz);
window.addEventListener("DOMContentLoaded", startQuiz);
