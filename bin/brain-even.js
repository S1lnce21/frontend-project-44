#!/usr/bin/env node

const readline = require('readline-sync');
const { getRandomNumber } = require('../src/utils');

const playGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomNumber(1, 100);
    const answer = readline.question(`Question: ${number}\nYour answer: `);

    if (answer === (number % 2 === 0 ? 'yes' : 'no')) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number % 2 === 0 ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(name);
};

welcomeMessage();