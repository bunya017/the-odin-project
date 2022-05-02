function computerPlay () {
  const SELECTION = ['rock', 'paper', 'scissors']
  return SELECTION[Math.floor(Math.random() * 3)]
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return 'Tie!'
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

function game () {
  let player = 0
  let computer = 0
  while ((player + computer) < 5){
    const playerSelection = prompt('Rock, Paper, Scissors:')
    const computerSelection = computerPlay()
    const score = playRound(playerSelection, computerSelection)
    if (score.indexOf('You win!') > -1) {
      player++
    } else if (score.indexOf('You lose!') > -1) {
      computer++
    }
  }
  const winner = (player > computer) ? 'You win!' : 'You lose'
  console.log(`${winner} ${player}:${computer}`)
}

game()
