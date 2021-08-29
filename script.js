let num = 0;
let playerHand = 'rock';
let playerWonGames = 0;
let computerWonGames = 0;
console.log('Please Pick "Rock" or "Paper" or "Scissors"');
console.log("Use playGame(YourPick) to play.");


function computerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3);
    num = Math.floor(Math.random() * (max - min + 1) + min);
    pickedHand();
    function pickedHand() {
        if (num === 1) {
            console.log('Computer Picked Rock')
        }
    
        else 
        if (num === 2) {
            console.log('Computer Picked Paper')
        }
    
        else {
            console.log('Computer Picked Scissors')
        }
}


    
}

    for (let index = 0; index < 5; index++) {
        playGame(playerHand = prompt("Please Pick 'Rock', 'Paper', or 'Scissors'.")); 
        console.log("Computer:" + computerWonGames + "You:" + playerWonGames);
        if (computerWonGames >= 3){
            console.log("The Computer Won, You Lose.")
            index = 5;
        }

        else
        if (playerWonGames >= 3){
            console.log("You Won, Congrats");
            index = 5;
        }
       
    }

function playGame() {
        
    
    playerHand = playerHand.toLowerCase();
    switch (playerHand) {
        case 'rock':
            computerChoice();
            if (num === 1) {console.log("It's a Draw")}
        else
            if (num === 2) {computerWonGames++;   
                            console.log("You lose");
                            }
        else
            if (num === 3) {playerWonGames++;
                            console.log("You Win.")}

            break;

        case 'paper':

            computerChoice();

            if (num === 1) {playerWonGames++;
                            console.log("You Win.")}
        else
            if (num === 2) {console.log("It's a Draw.")}
        else
            if (num === 3) {computerWonGames++
                            console.log("You Lose.")}


        
            break;

            case 'scissors':

                computerChoice();

            if (num === 1) {computerWonGames++;
                            return("You Lose.")}
        else
            if (num === 2) {playerWonGames++
                            return("You Win.")}
        else
            if (num === 3) {return("It's a Draw.")}

            break;

        default:
                console.log("Please pick 'Rock', 'Paper', or 'Scissors'.")
    }
    
}



