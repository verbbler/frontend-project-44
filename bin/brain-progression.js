#!/usr/bin/env node

import readlineSync from 'readline-sync';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const arr = [];
  const progressionArr = [];

  const makeProgression = () => {
    const randomNumber = ['5', '6', '7', '8', '9', '10'];
    const randomNumIndex = Math.floor(Math.random() * randomNumber.length);
    const progressionLength = randomNumber[randomNumIndex];
    const startOfProgression = Math.floor(Math.random() * 100);
    let pointOfProgression = Math.floor(Math.random() * 10);
    progressionArr.push(startOfProgression);

    /* eslint-disable */
    for (let i = 0; i < progressionLength; i++) {
      if (pointOfProgression === 0) pointOfProgression = 1;
      progressionArr.push(progressionArr[i] + pointOfProgression);
      if (progressionArr.length === 10) break;
    }
  };

  for (let i = 0; i < 3; i++) {
    progressionArr.length = 0;
    makeProgression();

    const hiddenNum = progressionArr[Math.floor(Math.random() * progressionArr.length)];

    const hiddenProgression = progressionArr
      .toString()
      .replace(hiddenNum, '..')
      .replaceAll(',', ' ');

    const answer = readlineSync.question(
      `What number is missing in the progression? \nQuestion: ${hiddenProgression} \nYour answer: `,
    );

    if (answer == hiddenNum) {
      /* eslint-enable */
      console.log('Correct!');
      arr.push(answer);
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${hiddenNum}". Let's try again, ${name}!`,
      );
      arr.length = 0;
      break;
    }
  }
  if (arr.length === 3) console.log(`Congratulations, ${name}!`);
};

progression();
