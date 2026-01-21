let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".new_btn");
let restartGame = document.querySelector(".reset_btn");
let winnerCon = document.querySelector(".winnerContainer");
let gameWinner = document.querySelector(".game_winner");
let X_winer = document.querySelector(".xWinner");
let O_winer = document.querySelector(".oWinner");
let No_winer = document.querySelector(".noWinner");
let drawg = document.querySelector(".draw_btn");
let turnX = true;
let Xi = 0;
let Oi = 0;
let draw = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  turnX = true;
  enableBox();
  winnerCon.classList.add("hidden");
};

const drawGame = () => {
  turnX = true;
  enableBox();
  winnerCon.classList.add("hidden");
  draw++;
  No_winer.innerText = `Draw = ${draw}`;
};

const disableBox = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enableBox = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const showWinner = (winner) => {
  gameWinner.innerText = `Congratulations Winner ${winner}`;
  winnerCon.classList.remove("hidden");
};

const Scror = (winner) => {
  if (winner === "x" || winner === "X") {
    Xi++;
    X_winer.innerText = `X = ${Xi}`;
  } else if (winner === "o" || winner === "O") {
    Oi++;
    O_winer.innerText = `O = ${Oi}`;
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 && pos2 && pos3) {
      if (pos1 === pos2 && pos2 === pos3) {
        disableBox();
        showWinner(pos1);
        Scror(pos1);
        return;
      }
    }
  }
};

restartGame.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
drawg.addEventListener("click", drawGame);
