// script.js
const messageBox = document.getElementById('message-box');
const message = document.getElementById('message');
const choices = document.getElementById('choices');
const tryAgain = document.getElementById('try-again');

let lastChoice = null;

document.getElementById('red').addEventListener('click', () => handleChoice('red'));
document.getElementById('blue').addEventListener('click', () => handleChoice('blue'));
tryAgain.addEventListener('click', resetGame);

function handleChoice(choice) {
    if (choice === lastChoice) {
        message.textContent = `U've already chosen this one Houda, fuck you <3, try the other one`;
        tryAgain.style.display = 'block';
        choices.style.display = 'none';
    } else {
        if (lastChoice) {
            message.textContent = `Fuck you again Houda, but YOU'RE THE SWEETEST ❤️`;
            choices.style.display = 'none';
            tryAgain.style.display = 'none';
        } else {
            message.textContent = `Fuck u Houda`;
            tryAgain.style.display = 'block';
            choices.style.display = 'none';
        }
        lastChoice = choice;
    }
}

function resetGame() {
    message.textContent = 'Choose red or blue';
    choices.style.display = 'block';
    tryAgain.style.display = 'none';
}
