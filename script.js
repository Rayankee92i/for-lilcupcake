// script.js
const textDisplay = document.getElementById('text-display');
const playButton = document.getElementById('play-button');

// Les messages, leurs couleurs et styles respectifs
const messages = [
    {
        text: "HOUDA AYA",
        textColor: "black", // Wine red
        backgroundColor: "gold",
        duration: 2000
    },
    {
        text: "MY FIRE OPAL",
        textColor: "#ff4500", // Rouge volcanique
        backgroundColor: "gold",
        duration: 3000
    },
    {
        text: "FUCK YOUR ANGER ISSUES ❤️",
        textColor: "navy", // Navy blue
        backgroundColor: "gold", // Doré
        duration: Infinity
    }
];

let currentMessageIndex = 0;

// Fonction pour afficher les messages successivement
function showMessage() {
    const message = messages[currentMessageIndex];
    textDisplay.textContent = message.text;
    textDisplay.style.color = message.textColor;
    textDisplay.style.backgroundColor = message.backgroundColor;
    textDisplay.style.display = "block";

    // Si ce n'est pas le dernier message, continuer
    if (message.duration !== Infinity) {
        setTimeout(() => {
            currentMessageIndex++;
            showMessage();
        }, message.duration);
    } else {
        // Réafficher le bouton à la fin
        playButton.style.display = "block";
    }
}

// Gestionnaire du clic sur le bouton
playButton.addEventListener('click', () => {
    playButton.style.display = "none"; // Masquer le bouton
    currentMessageIndex = 0; // Réinitialiser
    showMessage();
});
