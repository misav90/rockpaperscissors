
const score = document.getElementsByClassName("scores");
const choice =document.getElementsByName("choices");
const pchoice = document.getElementById("pchoice");
const cchoice = document.getElementById("cchoice");
const choiceR = document.getElementById("c-rock");
const choiceP= document.getElementById("c-paper");
const choiceS = document.getElementById("c-scissors");
const result = document.getElementsByClassName("result");

const initscore = {
player: 0, 
computer: 0
}

function startgame () {
    console.log("game started");
}

choiceR.addEventListener('click', function() {
   console.log("rock");
})
choiceP.addEventListener('click', function() {
    console.log("Paper");
 })
 choiceS.addEventListener('click', function() {
    console.log("Scissors");
 })