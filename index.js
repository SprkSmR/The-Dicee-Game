var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var diceImages = document.querySelectorAll("img");

diceImages[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
diceImages[1].setAttribute("src", "./images/dice"+randomNumber2+".png");

var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    title.textContent = "Player 1 wins!";
}else{
    title.textContent = "Player 2 wins!";
}