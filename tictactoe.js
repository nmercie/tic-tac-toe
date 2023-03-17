const board = document.querySelector('.board');
let currentPlayer = 'X';
let gameOver = false;
let moves = 0;

function makeMove(event) {
  if (gameOver) {
    return;
  }

  const cell = event.target;

  if (cell.className !== 'cell' || cell.textContent) {
    return;
  }

  cell.textContent = currentPlayer;
  moves++;

  if (checkWin(currentPlayer)) {
    alert(`${currentPlayer} wins!`);
    gameOver = true;
  } else if (moves === 9) {
    alert(`It's a draw!`);
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin(player) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const cells = board.querySelectorAll('.cell');
  return winCombos.some(([a, b, c]) =>
    cells[a].textContent === player &&
    cells[b].textContent === player &&
    cells[c].textContent === player
  );
}