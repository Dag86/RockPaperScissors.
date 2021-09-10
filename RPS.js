//Game logic
 
let playerScore = 0;
let computerScore = 0;
let roundResult ='';

function computerPlay(){
let myArr = ['rock','paper','scissors'];
  return myArr[Math.floor(Math.random() * myArr.length)];
}
  function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
     return roundResult = 'draw';
    }
if (
   (playerSelection === 'rock' && computerSelection === 'scissors') ||
   (playerSelection === 'paper' && computerSelection === 'rock') ||
   (playerSelection === 'scissors' && computerSelection === 'paper')
  )
    {
    playerScore++;
    return roundResult = 'player';
    }

if(
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  )
    {
    computerScore ++;
   return roundResult = 'computer';
    }
    
  }
  const playerSelection = '';
  const computerSelection = computerPlay();

  function isGameOver(){
    return playerScore === 5 || computerScore === 5;
  }
 
const paraG = document.getElementsByClassName('para')
