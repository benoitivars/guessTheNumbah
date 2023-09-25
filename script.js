var randomNumber = Math.floor(Math.random() * 11);
numberOfAttempts = 1;
var guess = parseInt(prompt(`Enter a number between 0 and 10 included`));

while (guess !== randomNumber) {
if (guess < 0 || guess > 10) {
    guess = parseInt(prompt("You are out of range ! We said between 0 and 10 included !"));
} else if (guess < randomNumber) {
    guess = parseInt(prompt("Too small, try again !"));
    } else if (guess > randomNumber) {
        guess = parseInt(prompt("Too big, try again !")); 
    } else if (isNaN(guess)) {
    guess = parseInt(prompt("You have to enter a number !"));
    }
    numberOfAttempts++;
}
alert(`Congrats, you got the good value ! It was indeed ${randomNumber} and it took you ${numberOfAttempts} attempts to get the correct answer !`);