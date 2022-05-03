function computerPlay () {
  const SELECTION = ['rock', 'paper', 'scissors']
  return SELECTION[Math.floor(Math.random() * 3)]
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return 'It\'s a tie!'
  } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
    return 'You lose! Paper beats Rock'
  } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
    return 'You win! Rock beats Scissors'
  } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    return 'You win! Paper beats Rock'
  } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
    return 'You lose! Scissors beats Paper'
  } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
    return 'You lose! Rock beats Scissors'
  } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    return 'You win! Rock beats Paper'
  }
}

function incrementScore (id) {
  const scoreEl = document.getElementById(id)
  const currentScore = Number(scoreEl.innerText)
  scoreEl.innerText = currentScore + 1
}

function play (playerSelection) {
  const statusEl = document.getElementById('status')
  let playerScore = Number(document.getElementById('player-score').innerText)
  let computerScore = Number(document.getElementById('computer-score').innerText)
  if ((playerScore < 5) && (computerScore < 5)) {
    const computerSelection = computerPlay()
    const score = playRound(playerSelection, computerSelection)
    if (score.indexOf('You win!') > -1) {
      incrementScore('player-score')
      statusEl.innerText = score
    } else if (score.indexOf('You lose!') > -1) {
      incrementScore('computer-score')
      statusEl.innerText = score
    } else {
      statusEl.innerText = score
    }
    playerScore = Number(document.getElementById('player-score').innerText)
    computerScore = Number(document.getElementById('computer-score').innerText)
    if ((playerScore > 4) || (computerScore > 4)) {
      statusEl.innerText = (playerScore > computerScore) ?
        'Congratulations! You won the game' :
        'You lost the game'
    }
  }
}

function reload () {
  return window.location.replace('')
}
