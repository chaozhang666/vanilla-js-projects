let dice1Image = document.getElementById("dice1");
let dice2Image = document.getElementById("dice2");
let button = document.getElementById("playbutton");
let title = document.getElementById("title");

function play() {
  number1 = Math.floor(Math.random() * 6 + 1);
  number2 = Math.floor(Math.random() * 6 + 1);
  address1 = "./img/dice" + number1 + ".png";
  address2 = "./img/dice" + number2 + ".png";
  dice1Image.setAttribute("src", address1);
  dice2Image.setAttribute("src", address2);
  if (number1 > number2) {
    title.innerHTML = "🚩 Player 1 Win !";
  } else if (number2 > number1) {
    title.innerHTML = "Player 2 Win ! 🚩 ";
  } else {
    title.innerHTML = "Draw !";
  }
}
button.addEventListener("click", play);
