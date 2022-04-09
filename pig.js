let player1 = {
   name: "Player 1",
   index: 0,
   currentScore: 0,
   currentTotalScore: 0,
   totalScore: 0
}
let player2 = {
   name: "Player 2",
   index: 1,
   currentScore: 0,
   currentTotalScore: 0,
   totalScore: 0
}

function $(className){
   return document.getElementsByClassName(className)[0];
}
function resetTurn(){
   player1.currentTotalScore = 0;
   player2.currentTotalScore = 0;
   player1.currentScore = 0;
   player2.currentScore = 0;
   $(`currentScore`).innerHTML = 0;
   $(`currentTotalScore`).innerHTML = 0;
}
function resetGame(){
   resetTurn();
   player1.totalScore = 0;
   player2.totalScore = 0; 0;
   $(`totalScore1`).innerHTML = 0;
   $(`totalScore2`).innerHTML = 0;
}
function choosePlayer(player){
   $('turn-info').innerHTML = `${player.name}'s turn`
   $("play").onclick = function(){roll(player)}
   $("hold").onclick = function(){holdScore(player)}
}

//----------------Start game----------------
function newGame(){
   resetGame()
   //Take the name:
   player1.name = document.getElementById("player1").value;
   player2.name = document.getElementById("player2").value;
   if(player1.name !="" && player2.name !=""){
      $("play-area").style.display = "block";
   }else{alert("Please set all players's name")};
   // Choose the player:
   let playerRandom = Math.floor(Math.random()*2);
   playerRandom == 0? choosePlayer(player1):choosePlayer(player2);
}
function turnPlayer(player){
   player.index == 0? choosePlayer(player2):choosePlayer(player1);
}
function roll(player){    
   //Do the random:
   player.currentScore = Math.ceil(Math.random()*6);
   $(`currentScore`).innerHTML = player.currentScore;
   // Hold or lose:
   if(player.currentScore == 1){
       alert(`Player ${player.name} roll 1!`)
       resetTurn();
       turnPlayer(player);
   }else{
       player.currentTotalScore += player.currentScore;
       $(`currentTotalScore`).innerHTML = player.currentTotalScore;
   }
}

function holdScore(player){
   // Count the total score:
   player.totalScore += player.currentTotalScore;
   $(`totalScore${player.index + 1}`).innerHTML = player.totalScore;
   resetTurn();
   turnPlayer(player);
   // Win:
   if(player.totalScore >= 100){
       alert(`${player.name} win!`)
       resetGame();
       $('turn-info').innerHTML = `-------------`;
       document.getElementById("player1").value = "";
       document.getElementById("player2").value = "";
      $("play-area").style.display = "none";
   }
}
