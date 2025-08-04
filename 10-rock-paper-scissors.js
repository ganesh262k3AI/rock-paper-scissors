let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Game tie.';
    } else if (computerMove === 'scissors') {
      result = 'you win.';
    } else if (computerMove === 'paper') {
      result = 'you lose.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'you win.';
    } else if (computerMove === 'scissors') {
      result = 'you lose.';
    } else if (computerMove === 'paper') {
      result = 'Game tie.';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'you lose.';
    } else if (computerMove === 'scissors') {
      result = 'Game tie.';
    } else if (computerMove === 'paper') {
      result = 'you win.';
    }
  }

  // Update score
  if (result === 'you win.') {
    score.wins += 1;
  } else if (result === 'you lose.') {
    score.loses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `
    You 
    <img src="images/${playerMove}-emoji.png" class="move-icon"> 
    <img src="images/${computerMove}-emoji.png" class="move-icon"> 
    Computer`;

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`);
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `
    Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let move = '';

  if (randomNumber === 1) {
    move = 'rock';
  } else if (randomNumber === 2) {
    move = 'paper';
  } else if (randomNumber === 3) {
    move = 'scissors';
  }

  return move;
}