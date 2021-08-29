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

function playGame(player) {
    player = player.toLowerCase();
    switch (player) {
        case 'rock':
            computerChoice();
            if (num === 1) {return("It's a Draw")}
        else
            if (num === 2) {return("You lose")
                            computerWonGames}
        else
            if (num === 3) {return("You Win")}

            break;

        case 'paper':
            computerChoice();

            if (num === 1) {return("You Win.")}
        else
            if (num === 2) {return("It's a Draw.")}
        else
            if (num === 3) {return("You Lose.")}
        
            break;

            case 'scissors':
                computerChoice();

            if (num === 1) {return("You Lose.")}
        else
            if (num === 2) {return("You Win.")}
        else
            if (num === 3) {return("It's a Draw.")}
        
            break;

        default:
            console.log("Please pick 'Rock', 'Paper', or 'Scissors'.")
                break;
    
    }
    
}



// function playGame(player) {
//     computerChoice();
//     playerHand = player.toLowerCase();
//     if (num === 1 && playerHand === 'rock') {console.log("It's a Draw")}
//     else 
//     if (num === 2 && playerHand === 'rock')
//     }
    
    




