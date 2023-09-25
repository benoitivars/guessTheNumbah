# FEEDBACK

J'ai fait ça à côté de John, qui a testé mons cript qui tournait bien... jusqu'à ce qu'il décide d'entrer une string commençant par une valeur numérique !

Du coup, j'ai demandé un coup de main à CHatGPT qui propsoe cette double boucle :

* La première qui vérifie si on entre bien qu'un nombre et en dehors de la range de 0 à 10,
* Et la seconde la valeur rentrée à celle à deviner :

var randomNumber = Math.floor(Math.random() * 11);
var numberOfAttempts = 1;
var guess;

while (true) {
    guess = parseInt(prompt(`Enter a number between 0 and 10 included`));

    // Vérifiez si la saisie n'est pas un nombre valide
    if (isNaN(guess)) {
        alert("You have to enter a number !");
    } else if (guess < 0 || guess > 10) {
        alert("You are out of range ! We said between 0 and 10 included !");
    } else {
        break; // Sortez de la boucle si la saisie est un nombre valide dans la plage
    }
}

while (guess !== randomNumber) {
    if (guess < randomNumber) {
        alert("Too small, try again !");
    } else if (guess > randomNumber) {
        alert("Too big, try again !");
    }
    guess = parseInt(prompt(`Enter a number between 0 and 10 included`));
    numberOfAttempts++;
}

alert(`Congrats, you got the good value ! It was indeed ${randomNumber} and it took you ${numberOfAttempts} attempts to get the correct answer !`);
Avec cette modification, la saisie de l'utilisateur est d'abord vérifiée pour s'assurer qu'elle est un nombre valide avant de continuer avec les autres vérifications. Cette modification résout le problème de traitement des entrées non numériques suivies de caractères autres.





