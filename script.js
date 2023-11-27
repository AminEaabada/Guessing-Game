const words = ['hello', 'amine', 'apple', 'book'];
let W = Math.floor(Math.random() * 5);
const word = words[W];
const letterSpans = document.querySelectorAll('.letter');
const guessList = document.querySelector('.guess-list');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
let guesses = [];
console.log(word);
function updateWordDisplay() {
    for (let i = 0; i < word.length; i++) {
        if (guesses.includes(word[i])) {
            letterSpans[i].innerText = word[i];
        } else {
            letterSpans[i].innerText = '_';
        }
    }
}

function updateGuessList() {
    guessList.innerHTML = '';

    for (let i = 0; i < guesses.length; i++) {
        const li = document.createElement('li');
        li.innerText = guesses[i];
        guessList.appendChild(li);
    }
}

function handleGuess() {
    const guess = guessInput.value.toLowerCase();

    if (guesses.includes(guess)) {
        alert('You already guessed that letter!');
        return;
    }

    guesses.push(guess);
    updateWordDisplay();
    updateGuessList();

    if (!word.includes(guess)) {
        alert('Sorry, that letter is not in the word!');
    }

    if (letterSpans[0].innerText !== '_'
        && letterSpans[1].innerText !== '_'
        && letterSpans[2].innerText !== '_'
        && letterSpans[3].innerText !== '_'
        && letterSpans[4].innerText !== '_') {
        alert('Congratulations, you guessed the word!');
    }
}

guessButton.addEventListener('click', handleGuess);