
var dropdown = document.getElementById("board");
let bt1=document.querySelector(".start");
let bt2=document.querySelector(".reset");
let bt=null;
var rows=0;
let count=0;

var array=[];


//function to create grid structure.
function createGrid() {

   
console.log(rows);
    
    gridContainer.innerHTML = '';
    gridContainer.style.width = 100 * rows + "px";
    gridContainer.style.height = 100 * rows + "px";


    
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < rows; j++) {
        var button = document.createElement("button");
        button.textContent ="";
        button.style.border="1px solid black";
        button.style.width="99px";
        button.style.height="99px";
        
        gridContainer.appendChild(button);
      }

    }
    bt = document.querySelectorAll("#gridContainer button");
    if(bt){
        bt.forEach(bt=>{
            bt.addEventListener('click', handleClick);
        })};
        buttonArray();
       if(rows>0){ var rescont=document.querySelector('.result-container');
       rescont.style.visibility='visible';}
  }

//logic to add data in grid
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
            document.getElementById('turn-name').value = 'O';
        } else if(count%2!=0 && checkForWinner()==false) {
            document.getElementById('turn-name').value ='X';
        }
    },100);

    if (checkForWinner()) {
        //setTimeout(function(){alert("Player " + (count % 2 != 0 ? "'O'" : "'X'") + " wins");},200);
        var winnerName = (count % 2 != 0 ? 'O' : 'X');
        document.getElementById('winner-name').value = winnerName;
       // console.log(winner.innerHTML);
        // Remove event listeners from buttons
        bt.forEach(bt => {
            bt.removeEventListener('click', handleClick);
        });

    }
 
    
}

//create array of buttons
function buttonArray(){
    array=[];
    var buttons=[];
var c=0;
    bt.forEach(bt=>{
buttons.push(bt);
c++;
if(c==rows){c=0;array.push(buttons);buttons=[];}
    })

    console.log(array);
}

function checkForWinner(){

    //horizontal check
for(var i=0;i<rows;i++){
    var tempbutton=array[i][0];
    var char=tempbutton.textContent;
    if(char==''){continue;}
    var con=1;
    for(var j=0;j<rows;j++){
        var tempbutton2=array[i][j];
        if(tempbutton2.textContent!=char){con=0;}
       // console.log(con);
    }
    if(con==1){return true;}
  //  console.log(con);

    
}
//vertical check
for(var i=0;i<rows;i++){
    var tempbutton=array[0][i];
    var char=tempbutton.textContent;
    if(char==''){continue;}
    var con=1;
    for(var j=0;j<rows;j++){
        var tempbutton2=array[j][i];
        if(tempbutton2.textContent!=char){con=0;}
    }
    if(con==1){return true;}

   
}
//diagonal check
var con=1;
var tempbutton=array[0][0];
for(var i=0;i<rows;i++){
   
    var tempbutton2=array[i][i];
    if(tempbutton2.textContent!=tempbutton.textContent || tempbutton2.textContent==''){con=0;break;}
}
if(con==1){return true;}
con=1;

tempbutton=array[0][rows-1];
for(var i=0;i<rows;i++){
    var tempbutton2=array[i][rows-i-1];
    if(tempbutton2.textContent!=tempbutton.textContent || tempbutton2.textContent=='') {con=0;break;}
}
if(con==1){return true;}


return false;

};

//logic to claer grid data.
function functionReset(){
    if(bt){
    bt.forEach(bt=>{
        if (bt.textContent!=''){
            bt.textContent='';
        }
    })
}
document.getElementById('turn-name').value = '';
document.getElementById('winner-name').value = '';
count=0;
var rescont=document.querySelector('.result-container');
    rescont.style.visibility='hidden';

    bt.forEach(bt => {
        bt.removeEventListener('click', handleClick);
    });
};


// takes option value of drop down and assign to row var.

dropdown.addEventListener("change", function() {
   
    var selectedIndex = dropdown.selectedIndex;
    var selectedOption = dropdown.options[selectedIndex];
rows=selectedOption.value;
    console.log("Selected option: " + selectedOption.value);
});

//action for button=> START
bt1.addEventListener('click',createGrid);

//action for button reset
bt2.addEventListener('click',functionReset);

