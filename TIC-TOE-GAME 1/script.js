let count = 0;
let bt=document.querySelectorAll('button.tab');
let reset=document.querySelector('#res');

function handleClick(event){
    if (event.target.textContent !== '') {
        alert("Please select an empty box."); // Inform the player to select another box
        return; // Exit the function to prevent further actions
    }
    if(count%2==0){
        event.target.textContent='O';
    } else {
        event.target.textContent='X';
    }
    count++;

    setTimeout(function(){
        if(count%2==0 && checkForWinner()==false){
            alert("Player 'O' turn");
        } else if(count%2!=0 && checkForWinner()==false) {
            alert("player 'X' turn");
        }
    },500);

    if (checkForWinner()) {
        setTimeout(function(){alert("Player " + (count % 2 != 0 ? "'O'" : "'X'") + " wins");},200);
        // Remove event listeners from buttons
        bt.forEach(bt => {
            bt.removeEventListener('click', handleClick);
        });

    }
 
    
}

function checkForWinner() {
    // Check for winning conditions
    if ((bt[0].textContent === bt[1].textContent && bt[1].textContent === bt[2].textContent && bt[0].textContent !== '') ||
        (bt[3].textContent === bt[4].textContent && bt[4].textContent === bt[5].textContent && bt[3].textContent !== '') ||
        (bt[6].textContent === bt[7].textContent && bt[7].textContent === bt[8].textContent && bt[6].textContent !== '') ||
        (bt[0].textContent === bt[3].textContent && bt[3].textContent === bt[6].textContent && bt[0].textContent !== '') ||
        (bt[1].textContent === bt[4].textContent && bt[4].textContent === bt[7].textContent && bt[1].textContent !== '') ||
        (bt[2].textContent === bt[5].textContent && bt[5].textContent === bt[8].textContent && bt[2].textContent !== '') ||
        (bt[0].textContent === bt[4].textContent && bt[4].textContent === bt[8].textContent && bt[0].textContent !== '') ||
        (bt[2].textContent === bt[4].textContent && bt[4].textContent === bt[6].textContent && bt[2].textContent !== '')) {
        
        return true;
    }

    // Check for tie
    if (count == 9) {
        alert("TIE match");
        return true;
    }

    return false;
}

function handleClickReset(event){
bt.forEach(bt=>{
    if (bt.textContent=='O' || bt.textContent=='X'){
        bt.textContent='';
    }
});
   
bt.forEach(bt=> {
    bt.addEventListener('click', handleClick);
});
 
}


bt.forEach(bt=> {
    bt.addEventListener('click', handleClick);
});



reset.addEventListener('click',handleClickReset);