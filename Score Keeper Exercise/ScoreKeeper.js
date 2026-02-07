const player1ButtonSelector = document.querySelector('#player1Button');
const player2ButtonSelector = document.querySelector('#player2Button');
const resetButtonSelector = document.querySelector('#resetButton');
const player1DisplaySelector = document.querySelector('#player1Display');
const player2DisplaySelector = document.querySelector('#player2Display');
const matchPointScore = document.querySelector('#matchPoint');
function reset(){
    isGameOver = false;
    player1Score = 0;
    player2Score = 0;
    player1DisplaySelector.textContent = 0;
    player2DisplaySelector.textContent = 0;
    player1Score.classList.remove('winner', 'loser');
            player2Score.classList.remove('winner','loser');
}

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;


player1ButtonSelector.addEventListener('click', function(){
    if(!isGameOver){
        player1Score += 1;
        if(player1Score !== winningScore){
        player1DisplaySelector.textContent = player1Score;}
        if(player1Score === winningScore){
            isGameOver = true;}
            player1Score.classList.add('winner');
            player2Score.classList.add('loser');
        }
        player1DisplaySelector.textContent = player1Score
    })
player2ButtonSelector.addEventListener('click', function(){
    if(!isGameOver){
        player2Score += 1;
        if(player2Score !== winningScore){
        player2DisplaySelector.textContent = player2Score;}
        if(player2Score === winningScore){
            isGameOver = true;}
            player2DisplaySelector.textContent = player2Score
}})

matchPointScore.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButtonSelector.addEventListener('click', reset)