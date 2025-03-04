#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomExpression = () => {
    const operations = ['+', '-', '*'];
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operation = operations[getRandomNumber(0, operations.length - 1)];
    return { expression: `${num1} ${operation} ${num2}`, answer: eval(`${num1} ${operation} ${num2}`) };
};

const playCalc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}! What is the result of the expression?`);

    for (let i = 0; i < 3; i++) {
        const { expression, answer } = getRandomExpression();
        const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

        if (parseInt(userAnswer, 10) === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

playCalc();