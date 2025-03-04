#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greet = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    return name;
};

const gameCycle = (name, rounds, getQuestion, checkAnswer) => {
    let correctAnswers = 0;
    for (let i = 0; i < rounds; i++) {
        const question = getQuestion();
        const answer = readlineSync.question(`Question: ${question.question}\nYour answer: `);
        if (checkAnswer(question, answer)) {
            console.log('Correct!');
            correctAnswers++;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question.correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return false;
        }
    }
    console.log(`Congratulations, ${name}! You won!`);
    return true;
};

const playGame = (rounds, getQuestion, checkAnswer) => {
    const name = greet();
    gameCycle(name, rounds, getQuestion, checkAnswer);
};

export { playGame, greet };