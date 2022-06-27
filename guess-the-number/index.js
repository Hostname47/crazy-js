let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];

let resultBox = document.querySelector('#result-box');
let guessInput = document.querySelector('#guess-input');
let guessButton = document.querySelector('#guess-button');
let previousGuesses = document.querySelector('#previous-guesses');
let guessRightness = document.querySelector('#last-guess-rightness');
let lastGuessBalanceResult = document.querySelector('#last-guess-balance-result');
let restartButton = document.querySelector('#restart-game');

guessButton.addEventListener('click', function() {
    let guessValue = parseInt(guessInput.value, 10);
    guessValue = guessValue ? guessValue : 0;

    resultBox.classList.remove('opacity0');
    guesses.push(guessValue);
    guessInput.value = '';
    previousGuesses.textContent += '  ' + guessValue;

    if(guessValue == randomNumber) {
        guessRightness.classList.remove('red-background');
        guessRightness.classList.add('green-background');
        guessRightness.textContent = 'CONGRATULATION! you got it';
        disable_inputs_and_show_restart_button();
    } else {
        guessRightness.textContent = 'WRONG!';
        if(guessValue < randomNumber)
            lastGuessBalanceResult.textContent = 'Your guess was too low';
        else
            lastGuessBalanceResult.textContent = 'Your guess was too high';
    }

    if(guesses.length == 10) {
        guessRightness.textContent = '!!! GAME OVER !!!';
        disable_inputs_and_show_restart_button();
    }
});

function disable_inputs_and_show_restart_button() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    lastGuessBalanceResult.classList.add('none');
    restartButton.classList.remove('none');
}

restartButton.addEventListener('click', function() {
    guesses = [];

    guessInput.disabled = false;
    guessButton.disabled = false;
    resultBox.classList.add('opacity0');
    previousGuesses.textContent = '';

    guessRightness.classList.add('red-background');
    guessRightness.classList.remove('green-background');
});

