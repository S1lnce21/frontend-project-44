#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { playGame } from '../src/index.js';

const getQuestion = () => {
    const number = Math.floor(Math.random() * 100);
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    return {
        question: `${number}`,
        correctAnswer: number % 2 === 0 ? 'yes' : 'no',
    };
};

const checkAnswer = (question, answer) => {
    return answer.toLowerCase() === question.correctAnswer;
};

playGame(3, getQuestion, checkAnswer);