const p1 = {
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
    score: 0.
};

const p2 = {
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
    score: 0,
};

const resetButton = document.querySelector("#reset")
const winningScoreSelect = document.querySelector("#playTo")
let maxScore = 3;
let isFinished = false;

function reset() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    isFinished = false;
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.display.classList.remove("has-text-success", "has-text-danger");
    p2.display.classList.remove("has-text-success", "has-text-danger");
}

function updateScore(player, opponent) {
    if (!isFinished) {
        player.score += 1;
        if (player.score === maxScore) {
            isFinished = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

winningScoreSelect.addEventListener('change', function() {
    maxScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

