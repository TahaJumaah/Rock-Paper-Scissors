let num = 0;
let playerHand = 'rock';
let playerWonGames = 0;
let computerWonGames = 0;


function computerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3);
    num = Math.floor(Math.random() * (max - min + 1) + min);
    pickedHand();
    function pickedHand() {
        if (num === 1) {
            document.write('<br>Computer Picked Rock <br>')
        }
    
        else 
        if (num === 2) {
            document.write('<br>Computer Picked Paper <br>')
        }
    
        else {
            document.write('<br>Computer Picked Scissors <br>')
        }
}


    
}

    for (let index = 0; index < 5; index++) {
        playGame(playerHand = prompt("Please Pick 'Rock', 'Paper', or 'Scissors'.")); 
        document.write("Computer:" + computerWonGames + "You:" + playerWonGames);
        if (computerWonGames >= 3){
            document.write("The Computer Won, You Lose.")
            index = 5;
        }

        else
        if (playerWonGames >= 3){
            document.write("You Won, Congrats");
            index = 5;
        }
       
    }

function playGame() {
        
    
    playerHand = playerHand.toLowerCase();
    switch (playerHand) {
        case 'rock':
            computerChoice();
            if (num === 1) {document.write("It's a Draw. <br>")}
        else
            if (num === 2) {computerWonGames++;   
                            document.write("You lose. <br>");
                            }
        else
            if (num === 3) {playerWonGames++;
                            document.write("You Win. <br>")}

            break;

        case 'paper':

            computerChoice();

            if (num === 1) {playerWonGames++;
                            document.write("You Win. <br>")}
        else
            if (num === 2) {document.write("It's a Draw. <br>")}
        else
            if (num === 3) {computerWonGames++
                            document.write("You Lose. <br>")}


        
            break;

            case 'scissors':

                computerChoice();

            if (num === 1) {computerWonGames++;
                document.write("You Lose. <br>")}
        else
            if (num === 2) {playerWonGames++
                document.write("You Win. <br>")}
        else
            if (num === 3) {document.write("It's a Draw. <br>")}

            break;

        default:
                document.write("Please pick 'Rock', 'Paper', or 'Scissors'.")
    }
    
}



