'use strict';

let m = document.getElementById("message");
let pC = document.getElementById("panel-control");
let pG = document.getElementById("panel-game");
let btL = document.getElementById("btLevel");
let btP = document.getElementById("btPlay");

/*function resetI(){
    document.getElementById("panel-game").style.display = "none";
}*/
function reset(){
    document.getElementById("panel-game").style.display = "none";
    document.getElementById("btPlay").disabled = true;
   if(document.getElementById("btPlay").nodeValue)
        document.getElementById("btPlay").disabled = true;
    else
        document.getElementById("btPlay").disabled = false;
    
}
//resetI();
reset();

document.getElementById("message").textContent=" ";
document.getElementById("message").classList.remove("hide");

let gS = document.querySelectorAll('.gameStarted');

for (let x of gS) {
    document.getElementById("message").classList.add("hide");
}

//document.getElementById("btPlay").disabled = true;



/*

function resetFunction() {
        document.getElementById("panel-game").reset();
        if(!btL.value){
            document.getElementById("btPlay").disabled = true;
            pG.style.display = 'grid'; 
        } 
        else
            document.getElementById("btPlay").disabled = false; 

}
m.textContent="";
m.classList.remove('hide');

const gS = document.querySelectorAll('gameStarted');
for(let i of gS){
    gS[i].classList('hide');
}
function disabledFunction(){
    document.getElementById("btPlay").disabled = true; 
}

btL.addEventListener('click', resetFunction () { console.log('O elemento foi clicado!');});

function startGame(){
    btP.textContent="Terminar jogo";
    document.getElementById("btPlay").disabled = true; 
    for (let i of gS){
        g[i].classList.remove('hide');
    }
    m.classList.add('hide');


}
function stopGame(){
    btP.textContent="Iniciar jogo";
    document.getElementById("btPlay").disabled = false;
    resetFunction();
}

btP.addEventListener('click',()=>){
    if(m.textContent == "Terminar jogo")
     startGame();
    else
        stopGame();
});

pG.addEventListener('click',()=>){
    if(pG.textContent== "Clique em iniciar Jogo")
        pG.textContent.remove = true;
});
*/