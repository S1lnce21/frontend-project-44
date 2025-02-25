#!/usr/bin/env node

import greet from '../src/cli.js';
import readlineSync from 'readline-sync';

const playGame = (name) => {
    console.log(`Welcome, to the Brain Games!`);
    console.log('Answer "yes" if he number is even, otherwize answer "no".')

    let correctAnswers = 0;

    while (correctAnswers < 3) {
      const number = Math.floor(Math.random() * 100);
      const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
      
      if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number % 2 === 0 ? "yes" : "no"}'.`);
        console.log(`Let's try again, ${name}!`);
        return;

      } else if ((number % 2 === 0 && answer.toLowerCase() === "yes") || (number % 2 !== 0 && answer.toLowerCase() === "no")) {
        console.log("Correct!");
        correctAnswers+= 1;
        
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number % 2 === 0 ? "yes" : "no"}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }

    console.log(`Congratulations, ${name}!`);
};

const userName = greet();
playGame(userName);