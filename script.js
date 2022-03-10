const x_text="X";
const o_text="O";
const wincombo=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let currentPlayer=x_text;
let box=document.querySelectorAll(".cell");
let clickedArray=Array(box.length).fill(null);


const addSign = (e) =>{

    if(e.target.innerText==""){
    let id=e.target.id;
    let index=id[1];
    console.log(index);
    e.target.innerText=currentPlayer;
    clickedArray[index]=currentPlayer;
    checkWin();
    currentPlayer=changePlayer(currentPlayer);
    }
}


box.forEach(item=>item.addEventListener("click",addSign));




function changePlayer(currentPlayer) {

    if (currentPlayer ==x_text) {
        currentPlayer=o_text;
    } else {
        currentPlayer=x_text;
    }
    return currentPlayer;
}

function checkWin(){
    for (x of wincombo){
        let first=x[0];
        let second=x[1];
        let third=x[2];
        if (clickedArray[first]!=null && clickedArray[first]==clickedArray[second] && clickedArray[first]==clickedArray[third]){
            console.log(`${currentPlayer} wins`)
        }
    }
}