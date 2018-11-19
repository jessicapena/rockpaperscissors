// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

var userChoice = "";

var computerChoice = "";

var winner = "";

var randomNumber = 0;

$("#shoot").click(function(){
     var userChoice = $("#input").val();
      $("#userChoice").html(userChoice);
     var randomNumber=Math.random();
     
     console.log(randomNumber);
    if(randomNumber > .80) {
        $("#computerChoice").html("rock"); 
    }else if(randomNumber<.80 && randomNumber>.40){
        $("#computerChoice").html("scissors");
    }else if (randomNumber<.40 && randomNumber>0){
        $("#computerChoice").html("paper");
    }else {
        $("#computerChoice").html("paper");
        
    }
    
    console.log(winner);
    if(computerChoice === "rock" && userChoice === "paper"){
        $("#winner").html("You win!"); 
    }else if(computerChoice === "rock" && userChoice === "scissors"){
        $("#winner").html("Computer Wins!");
    }else if (computerChoice === "rock" && userChoice === "rock"){
        $("#winner").html("No one wins!");
    }else if (computerChoice === "paper" && userChoice === "paper"){
        $("#winner").html("No one wins!");
    }else if (computerChoice === "paper" && userChoice === "rock"){
        $("#winner").html("Computer wins!");
    }else if (computerChoice === "paper" && userChoice === "scissors"){
        $("#winner").html("You win!");
    }else if (computerChoice === "scissors" && userChoice === "paper"){
        $("#winner").html("Computer wins!");
    }else if (computerChoice === "scissors" && userChoice === "rock"){
        $("#winner").html("You win!");
    }else if (computerChoice === "scissors" && userChoice === "scissors"){
        $("#winner").html("No one wins!");
    }else {
        $("#winner").html("No one wins!");
    }
});




//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

