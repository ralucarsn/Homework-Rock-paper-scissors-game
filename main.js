var options = ["Rock", "Paper", "Scissors"];

var user = options[Math.floor(Math.random() * 3)];
var computer = options[Math.floor(Math.random() * 3)];




function random(user, computer){
    if ( user === computer ){
         console.log ("It's a tie!");
    } else if ( user === "Rock" && computer === "Scissors" || user === "Paper" && computer === "Rock" || user === "Scissors" && computer === "Paper") {
         console.log ("User wins!");
    } else {
         console.log ("Computer wins!");
    }
}

random(user, computer);