const characters = ['牛', '龟', '肉', '鱼', '贝', '火', '水', '象', '又'];
let selectedBubbles = [];
let canClick = false; // 游戏开始前禁止点击
let startTime = null;
let timerInterval = null;

// 监听 "开始游戏" 按钮
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    document.getElementById('startButton').addEventListener('click', startGame);
});

// 🎮【开始游戏】解锁泡泡、开始计时
function startGame() {
    document.getElementById('startButton').disabled = true; // 按钮禁用
    canClick = true; // ✅ 允许点击泡泡
    enableBubbles(); // 解锁泡泡
    startTimer(); // 开始计时
    startTime = Date.now();
}

// 🎲【初始化游戏】创建泡泡
function initGame() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = ''; // 清空旧游戏
    document.getElementById('result').innerHTML = '';

    // 生成匹配的甲骨文与现代汉字，并打乱顺序
    const pairs = characters.flatMap(char => [
        { char, type: 'oracle' },
        { char, type: 'modern' }
    ]).sort(() => Math.random() - 0.5);

    pairs.forEach(({ char, type }) => createBubble(char, type));

    disableBubbles(); // 🚫 先禁用泡泡，等待点击"开始游戏"
}

// 🔹【创建单个泡泡】
function createBubble(char, type) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.dataset.char = char;
    bubble.dataset.type = type;
    bubble.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    if (type === 'oracle') {
        bubble.style.backgroundImage = `url('images/${char}.png')`;
    } else {
        bubble.textContent = char;
    }

    bubble.addEventListener('click', () => handleBubbleClick(bubble));
    document.getElementById('gameBoard').appendChild(bubble);
}

// 🚫【禁用泡泡】（初始状态）
function disableBubbles() {
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.pointerEvents = 'none'; // 禁用点击
        bubble.style.opacity = '0.5'; // 视觉上变暗
    });
}

// ✅【启用泡泡】（点击“开始游戏”后）
function enableBubbles() {
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.pointerEvents = 'auto';
        bubble.style.opacity = '1';
    });
}

// 🎯【点击泡泡】
function handleBubbleClick(bubble) {
    if (!canClick || bubble.classList.contains('selected')) return; // 如果游戏未开始或泡泡已选中，则返回

    playSound();
    bubble.classList.add('selected');
    selectedBubbles.push(bubble);

    if (selectedBubbles.length === 2) {
        canClick = false; // 避免快速点击多个泡泡
        setTimeout(checkMatch, 600);
    }
}

// 🔍【检查匹配】
function checkMatch() {
    const [b1, b2] = selectedBubbles;
    const isSameChar = b1.dataset.char === b2.dataset.char;
    const isDifferentType = b1.dataset.type !== b2.dataset.type;

    if (isSameChar && isDifferentType) {
        removeBubble(b1);
        removeBubble(b2);
        checkWin(); // 检查是否胜利
    } else {
        b1.classList.remove('selected');
        b2.classList.remove('selected');
    }

    selectedBubbles = [];
    canClick = true;
}

// 🎭【匹配成功后移除泡泡】
function removeBubble(bubble) {
    bubble.classList.add('matched'); // 标记已匹配
    bubble.style.transition = 'opacity 0.5s ease-out';
    bubble.style.opacity = '0';
    setTimeout(() => bubble.remove(), 500); // 确保 500ms 后移除元素
}


// 🔊【播放音效】
function playSound() {
    const audio = new Audio('bubble.mp3');
    audio.playbackRate = 2.0;
    audio.play();
}

// 🏆【检查胜利】
function checkWin() {
    setTimeout(() => { // 🔥 延迟 100ms 确保 DOM 已更新
        const remaining = document.querySelectorAll('.bubble:not(.matched)'); // 确保所有泡泡都被正确匹配移除
        if (remaining.length === 0) {
            clearInterval(timerInterval);
            const time = ((Date.now() - startTime) / 1000).toFixed(1);
            document.getElementById('result').innerHTML = `
                🎉 恭喜挑战成功！<br>
                ⏱ 用时：${time}秒<br>
                <button onclick="restartGame()" class="restart-btn">再玩一次</button>
            `;
        }
    }, 100); // ⏳ 加一点延迟确保泡泡都被移除
}


// ⏳【计时器】
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    const timerElement = document.getElementById('timer') || document.createElement('div');
    timerElement.id = 'timer';
    document.body.appendChild(timerElement);

    timerInterval = setInterval(() => {
        const time = ((Date.now() - startTime) / 1000).toFixed(1);
        timerElement.textContent = `⏱ ${time}秒`;
    }, 100);
}

// 🔄【重玩游戏】
function restartGame() {
    clearInterval(timerInterval);
    document.getElementById('startButton').disabled = false; // 重新启用开始按钮
    selectedBubbles = [];
    canClick = false;
    initGame();
}
