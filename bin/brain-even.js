#!/usr/bin/env node

import readlineSync from 'readline-sync';

import playGame from '../src/index.js';

const getQuestionAndAnswer = () => {
    const number = Math.floor(Math.random() * 100);
    return {
        question: `${number}`,
        correctAnswer: number % 2 === 0 ? 'yes' : 'no',
    };
};

playGame('Answer "yes" if the number is even, otherwise answer "no".', () => getQuestionAndAnswer());