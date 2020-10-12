// add a src to image for player 1
// document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");

// function to create a random number 1-6
// console.log('HIGH: ', Math.ceil(0 * 6));
// console.log('LOW:  ', Math.ceil(0.99999 * 6));
function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

// generate the random numbers and display the dice on web page
var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();
document.getElementsByClassName("img1")[0].setAttribute("src", ("images/dice" + randomNumber1 + ".png"));
document.getElementsByClassName("img2")[0].setAttribute("src", ("images/dice" + randomNumber2 + ".png"));

// based on the winner display it on h1 tag
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<img class='win' src='images/win.png'> Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! <img class='win' src='images/win.png'>";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
