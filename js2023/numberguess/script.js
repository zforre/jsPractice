'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct Number 🥳'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// let guess = document.querySelector('.guess').value;

let number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number 🤨'
    } else if(guess === number) {
        document.querySelector('.message').textContent = 'Correct Number 🥳'
        document.querySelector('.number').textContent = number

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } else if (guess !== number) {
        if(score > 1){
        document.querySelector('.message').textContent = guess > number ? 'Too high ⬆️' : 'Too Low ⬇️'
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost 😭';
            document.querySelector('.score').textContent = 0;
        }

    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    number = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Start guessing'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    
})

