/*function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}


*/

//preload the six images first
var face0=new Image()
face0.src="../img/d1.gif"
var face1=new Image()
face1.src="../img/d2.gif"
var face2=new Image()
face2.src="../img/d3.gif"
var face3=new Image()
face3.src="../img/d4.gif"
var face4=new Image()
face4.src="../img/d5.gif"
var face5=new Image()
face5.src="../img/d6.gif"

function throwdice(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["mydice"].src=eval("face"+randomdice+".src")
}
