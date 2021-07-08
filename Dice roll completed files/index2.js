var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "dice" + randomNumber1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "dice" + randomNumber2;

document.querySelector(".img1").setAttribute("src", "images/" + dice1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/" + dice2 + ".png")


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "🏁Draw🏁";
}