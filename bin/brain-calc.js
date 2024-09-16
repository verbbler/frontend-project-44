#!/usr/bin/env node

import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  /* eslint-disable */
  const sign = ["+", "-", "*"];
  const arr = [];

  for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const randomIndex = Math.floor(Math.random() * sign.length);
    
    const answer = readlineSync.question(
      `What is the result of the expression? \n Question: ${number1} ${sign[randomIndex]} ${number2} \n Your answer: `,
    );
    const correctAnswer = eval(`${number1}${sign[randomIndex]}${number2}`);

    if (answer == correctAnswer) {
      /* eslint-enable */
      console.log('Correct!');
      arr.push(answer);
    } else {
      console.log(
        `"${answer}" is wrong answer :(. Correct answer was "${correctAnswer}". \n Let's try again, ${name}!`,
      );
      arr.length = 0;
      break;
    }
  }
  if (arr.length === 3) console.log(`Congratulations, ${name}!`);
};

calcGame();
