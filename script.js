let num = 0;




function computerChoice() {
    min = Math.ceil(1);
    max = Math.floor(3);
    num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num);
    pickedHand();
}


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
