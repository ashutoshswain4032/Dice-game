var randomNum = Math.floor(Math.random()*6)+1;
var randomNum1 = Math.floor(Math.random()*6)+1;
if(randomNum===1)
document.querySelector(".container .img1").setAttribute("src","./images/dice1.png");
if(randomNum===2)
document.querySelector(".container .img1").setAttribute("src","./images/dice2.png");
if(randomNum===3)
document.querySelector(".container .img1").setAttribute("src","./images/dice3.png");
if(randomNum===4)
document.querySelector(".container .img1").setAttribute("src","./images/dice4.png");
if(randomNum===5)
document.querySelector(".container .img1").setAttribute("src","./images/dice5.png");

if(randomNum1===1)
document.querySelector(".container .img2").setAttribute("src","./images/dice1.png");
if(randomNum1===2)
document.querySelector(".container .img2").setAttribute("src","./images/dice2.png");
if(randomNum1===3)
document.querySelector(".container .img2").setAttribute("src","./images/dice3.png");
if(randomNum1===4)
document.querySelector(".container .img2").setAttribute("src","./images/dice4.png");
if(randomNum1===5)
document.querySelector(".container .img2").setAttribute("src","./images/dice5.png");

if(randomNum>randomNum1)
document.querySelector("h1").textContent="Player 1 wins";
else if(randomNum===randomNum1)
document.querySelector("h1").textContent="It is a Tie";
else
document.querySelector("h1").textContent="Player 2 wins";