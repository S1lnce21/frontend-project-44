#!/usr/bin/env node

//logicGames
const playGame = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i++) {
      const number = Math.floor(Math.random() * 100);
      const answer = readlineSync.question(`Question: ${number}\nYour answer: `);

      if ((number % 2 === 0 && answer.toLowerCase() === "yes") || (number % 2 !== 0 && answer.toLowerCase() === "no")) {
        console.log("Correct!");
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