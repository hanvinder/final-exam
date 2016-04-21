/*app.js> Hanvinder Singh Rai>Comp1073-Final Exam> 21/04/2016*/
// Using images as var
var face1=new Image()
face1.src="../img/d1.gif"
var face2=new Image()
face2.src="../img/d2.gif"
var face3=new Image()
face3.src="../img/d3.gif"
var face4=new Image()
face4.src="../img/d4.gif"
var face5=new Image()
face5.src="../img/d5.gif"
var face6=new Image()
face6.src="../img/d6.gif"

function throwdice(){
	
//create a random integer between 1 and 6
	var randomdices=Math.round(Math.random()*6);

// showing random images on click
	document.images["mydice1"].src=eval("face"+randomdices+".src");

//  var randomdices used in image and number result for same result
	var die1 = document.getElementById("die1");
	die1.innerHTML = randomdices;

//create a random integer between 1 and 6
	var randomdice=Math.round(Math.random()*6);
	document.images["mydice2"].src=eval("face"+randomdice+".src");
	var die2 = document.getElementById("die2");
	die2.innerHTML = randomdice;
}