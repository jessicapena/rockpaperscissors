// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$("#shoot").click(function(){
     var userChoice = $("#input").val();
     var randomNumber=Math.random();
     $("#userChoice").html();
});

var userChoice = "";

var computerChoice = "";

var winner = "";

var randomNumber = 0;

console.log(randomNumber);
    if(randomNumber > .80) {
        $("#computerChoice").html("rock"); 
    }else if(randomNumber<.80 && randomNumber>.40){
        $("#computerChoice").html("scissors");
    }else if (fortune<.40 && fortune>0){
        $("#computerChoice").html("paper");
    }else {
        $("#computerChoice").html("paper");

console.log(result);
    if(computerChoice === "rock" && userChoice === "paper"){
        $("#result").html("You win!"); 
    }else if(computerChoice === "rock" && userChoice === "scissors"){
        $("#result").html("Computer Wins!");
    }else if (computerChoice === "rock" && userChoice === "rock"){
        $("#result").html("No one wins!");
    }else if (computerChoice === "paper" && userChoice === "paper"){
        $("#result").html("No one wins!");
    }else if (computerChoice === "paper" && userChoice === "rock"){
        $("#result").html("Computer wins!");
    }else if (computerChoice === "paper" && userChoice === "scissors"){
        $("#result").html("You win!");
    }else if (computerChoice === "scissors" && userChoice === "paper"){
        $("#result").html("Computer wins!");
    }else if (computerChoice === "scissors" && userChoice === "rock"){
        $("#result").html("You win!");
    }else if (computerChoice === "scissors" && userChoice === "scissors"){
        $("#result").html("No one wins!");
    }else {
        $("#result").html("No one wins!");




//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

