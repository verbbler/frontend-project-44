#!/usr/bin/env node

import readlineSync from "readline-sync";

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const prime = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  const arr = [];

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 1000);

    const answer = readlineSync.question(
      `Answer 'yes' if given number is prime. Otherwise answer 'no'. \nQuestion: ${randomNumber} \nYour Answer: `,
    );
    const correctAnswer = isPrime(randomNumber) ? "yes" : "no";

    if (answer == correctAnswer) {
      console.log("Correct!"),
      arr.push(answer);
    } else {
      console.log(
        `'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`
      );
      arr.length = 0;
      break;
    }
  };
  if (arr.length === 3) console.log(`Congratulations, ${name}!`);
};

prime();
