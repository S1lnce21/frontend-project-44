#!/usr/bin/env node

//import readlineSync from 'readline-sync';

import playGame from '../src/index.js';

const getQuestionAndAnswer = () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 5) + 1;
    const progression = Array.from({ length }, (_, i) => start + i * step);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return {
        question: progression.join(' '),
        correctAnswer: String(correctAnswer),
    };
};

playGame('What number is missing in the progression?', getQuestionAndAnswer);