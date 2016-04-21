function changePic(myrune1){
var randomdice=Math.floor(Math.random()*6)
document.images[myrune1].src="face"+Number(randomdice+1)+".jpg"
return randomdice+1
}
function roll(){
possibles=new Array()
res=""
num=document.getElementById("rollNum").value
for(i=0;i<12;i++){possibles[i]=0}
for (i=0;i<num;i++){
d1=changePic("myrune1")
d2=changePic("myrune2")
poss=d1+d2
possibles[poss-2]+=1
res+="Roll #"+Number(i+1)+": "+d1+"  "+d2+"<br>"
}
result.innerHTML=res
res=""
for (i=0;i<11;i++){
res+="The Sum of "+Number(i+2)+" occurred :" + possibles[i] +" Times<br>"
}
possTable.innerHTML=res
}