#!/usr/bin/env node

import readlineSync from "readline-sync";

const gcd = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  let arr = [];

  for (let i = 0; i < 3; i++) {
    let number1 = Math.floor(Math.random() * 100);
    let number2 = Math.floor(Math.random() * 100);

    const answer = readlineSync.question(
      `Find  the greatest common divisor of given numbers. \n Question: ${number1} ${number2} \n Your answer: `
    );
    function correctAnswer(number1, number2) {
      if (number2 > 0) {
        const k = number1 % number2;
        return correctAnswer(number2, k);
      } else {
        return number1;
      }
    }

    if (answer == correctAnswer(number1, number2)) {
      console.log("Correct!");
      arr.push(answer);
    } else {
      console.log(
        `'${answer}' is wrong answer :(. Correct answer was '${correctAnswer(
          number1,
          number2
        )}'. \n Let's try again, ${name}!)`
      );
      arr.length = 0;
      break;
    }
  }
  if (arr.length === 3) console.log(`Congratulations, ${name}!`);
};

gcd();
