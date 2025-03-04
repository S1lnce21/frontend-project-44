#!/usr/bin/env node

import readlineSync from 'readline-sync';

const roundsCount = 3;
const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    for (let i = 0; i < roundsCount; i += 1) {
        const question = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = isPrime(question) ? 'yes' : 'no';
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

playGame();