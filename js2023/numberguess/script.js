'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct Number 🥳'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// let guess = document.querySelector('.guess').value;

const number = Math.trunc(Math.random()*20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number 🤨'
    } else if(guess === number) {
        document.querySelector('.message').textContent = 'Correct Number 🥳'
    } else if (guess > number) {
        if(score > 1){
        document.querySelector('.message').textContent = 'Too high ⬆️'
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost 😭';
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < number) {
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low ⬇️'
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost 😭';
                document.querySelector('.score').textContent = 0;
            }
    }
})

