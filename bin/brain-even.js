#!/usr/bin/env node

import readlineSync from "readline-sync";

const evenGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  let array = [];
  for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * 100);
    let evenORodd = number % 2 === 0 ? "Even" : "Odd";

    const question = readlineSync.question(
      `Answer "yes" if the number is even, otherwise answer "no". \n Question: ${number} \n Your answer: `
    );

    if (evenORodd === "Odd") {
      if (question === "no") {
        console.log("Correct!");
        array.push(question);
      }
      if (question === "yes") {
        console.log(
          `'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name} !`
        );
        array.length = 0;
        break;
      }
      if (question !== "yes" && question !== "no") {
        console.log(
          `'${question}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name} !`
        );
        break;
      }
    }
    if (evenORodd === "Even") {
      if (question === "yes") {
        console.log("Correct!");
        array.push(question);
      }
      if (question === "no") {
        console.log(
          `'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name} !`
        );
        array.length = 0;
        break;
      }
      if (question !== "yes" && question !== "no") {
        console.log(
          `'${question}' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name} !`
        );
        break;
      }
    }
    if (array.length === 3) console.log(`Congratulations, ${name} !`);
  }
};

evenGame();