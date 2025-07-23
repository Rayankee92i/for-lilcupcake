// script.js
const messageBox = document.getElementById('message-box');
const message = document.getElementById('message');
const choices = document.getElementById('choices');
const tryAgain = document.getElementById('try-again');

let lastChoice = null;

document.getElementById('Man').addEventListener('click', () => handleChoice('Man'));
document.getElementById('Bear').addEventListener('click', () => handleChoice('Bear'));
tryAgain.addEventListener('click', resetGame);

function handleChoice(choice) {
    if (choice === lastChoice) {
        if (choice === 'Bear') {
            message.textContent = `Fuck u again u gotta change ur plan`;
        } else {
            message.textContent = `U've already chosen this one , fuck you <3, try the other one`;
        }
        tryAgain.style.display = 'block';
        choices.style.display = 'none';
    } else {
        if (choice === 'Man') {
            message.textContent = `Happy Birthday Imene, u such a sweet cupcake`;
        } else {
            message.textContent = `Fuck u, try again`;
        }
        lastChoice = choice;
        tryAgain.style.display = 'block';
        choices.style.display = 'none';
    }
}

function resetGame() {
    message.textContent = 'Choose Man or Bear';
    choices.style.display = 'block';
    tryAgain.style.display = 'none';
}
