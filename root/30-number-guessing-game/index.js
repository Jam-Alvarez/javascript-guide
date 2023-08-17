
// let's create a simple number guessing game using javascript!

const answer = Math.floor(Math.random() * 15 + 1);
let attemps = 0;

document.getElementById('js-submit-btn')
    .onclick = function() {
        let userGuess = document.getElementById('js-input').value;
        attemps++;

        if (userGuess == answer) {
            alert(`${userGuess} is the answer! It took you ${attemps} attemps!`)
        }
        else if (userGuess < answer) {
            alert(`Your answer ${userGuess} is a bit lower than the right answer`);
        }
        else {
            alert(`Your answer ${userGuess} is a bit higher than the right answer`);
        }
    }
