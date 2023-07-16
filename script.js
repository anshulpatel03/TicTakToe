console.log("welcome to tictactoe ")
let turn ="X";
let gameover = false;
let won="X";

const changeturn = () =>{
    return turn === "X"? "0" : "X";
}
const checkwin = () =>{
    if(gameover==true){
        Array.from(boxes).forEach(element =>{
            let boxtext = element.querySelector('.boxtext');
            boxtext.innerText='';
        })
        turn = 'X';
        gameover=false;
        document.getElementsByClassName("info")[0].innerText = "X" ;
        document.querySelector('.won').innerText = '';
        document.querySelector(".line").style.width = "0px";
        document.querySelector(".img").style.display = "none";
        
    }
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,315],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&boxtext[e[0]].innerText!==''){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText;
            document.querySelector('.won').innerText = boxtext[e[0]].innerText + "WON";
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".img").style.display = "flex";
            gameover = true;
        }
    })
}

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn = changeturn();
            checkwin();
            if(gameover==false){
                document.getElementsByClassName("info")[0].innerText = turn;
            }
            
        }
    })
});
let butt = document.getElementById('reset');
butt.addEventListener('click',()=>{
    Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector('.boxtext');
        boxtext.innerText='';
    })
    turn = 'X';
    gameover=false;
    document.getElementsByClassName("info")[0].innerText = "X"
    document.querySelector('.won').innerText = '' ;
    document.querySelector(".line").style.width = "0px";
    document.querySelector(".img").style.display = "none";

})
