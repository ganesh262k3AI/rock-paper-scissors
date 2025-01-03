

let score = JSON.parse (localStorage.getItem('score'))||
  {
  wins:0,
  loses:0,
  ties:0
 };

 
 updatescoreElement();
/*
  if(!score){
 score={
  wins:0,
  loses:0,
  ties:0
 }
  }
*/

    function playGame(playerMove){

    pickComputerMove();

     
     let result = '';
      
      if(playerMove ==='rock'){
    if (computerMOves === 'rock') {
      result = 'Game tie.';
      }else if (computerMOves === 'scissors') {
        result = 'you win.';
      }else if (computerMOves === 'paper') {
        result = 'you lose.';
      }
    }
    
    
    else if (playerMove === 'paper'){
      
  if (computerMOves === 'rock') {
    result = 'you win.';
    }else if (computerMOves === 'scissors') {
      result = 'you lose.';
    }else if (computerMOves === 'paper') {
      result = 'Game tie.';
    }
  }
  
  
  else if(playerMove==='scissor'){
     
  if (computerMOves === 'rock') {
    result = 'you lose.';
    }else if (computerMOves === 'scissors') {
      result = 'Game tie.';
    }else if (computerMOves === 'paper') {
      result = 'you win.';
    }
    }
    
  if (result === 'you win.'){
    score.wins +=1;

  }else if(result==='you lose.'){
    score.loses+=1;
  }else {
    score.ties+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updatescoreElement();
  
 document.querySelector('.js-result').
 innerHTML = result;

 document.querySelector('.js-move').innerHTML = ` you 
  <img src= "images/${playerMove}-emoji.png" class="move-icon"> 
  <img src="images/${computerMOves}-emoji.png" class="move-icon"> computer`
  }

 alert(`You picked ${playerMove}. Computer picked ${computerMOves}.  ${result} 
 wins:${score.wins} , loses: ${score.loses}, ties: ${score.ties}`);
    

    function updatescoreElement(){
      document.querySelector('.js-score')
 .innerHTML =` wins: ${score.wins} , loses: ${score.loses}, ties: ${score.ties}`;
  

    }
  
  
  
    function pickComputerMove(){
    
   
  
      const randomNumber = Math.random();
  
    if(randomNumber>0 && randomNumber <=1/3){
        computerMOves = 'rock';
    }else if(randomNumber>1/3 && randomNumber <=2/3){
      computerMOves = 'paper'
    }else if(randomNumber>2/3 && randomNumber <=1){
      computerMOves = 'scissors'
    }
   
    return computerMOves;
    }