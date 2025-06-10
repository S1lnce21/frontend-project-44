#!/usr/bin/env node

import readlineSync from 'readline-sync';

import playGame from '../src/index.js';

const getQuestionAndAnswer = () => {
    const numbers = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    const correctAnswer = gcd(...numbers);
    return {
        question: numbers.join(' '),
        correctAnswer: String(correctAnswer),
    };
};

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};

playGame('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);