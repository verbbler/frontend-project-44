import readlineSync from "readline-sync";

const calcGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  const sign = ["+", "-", "*"];
  const arr = [];

  for (let i = 0; i < 3; i++) {
    let number1 = Math.floor(Math.random() * 100);
    let number2 = Math.floor(Math.random() * 100);
    let randomIndex = Math.floor(Math.random() * sign.length);
    
    let answer = readlineSync.question(
      `What is the result of the expression? \n Question: ${number1} ${sign[randomIndex]} ${number2} \n Your answer: `
    );
    let correctAnswer = eval(`${number1}${sign[randomIndex]}${number2}`);

    if (answer == correctAnswer) {
      console.log("Correct!");
      arr.push(answer);
    } else {
      console.log(
        `'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'. \n Lets try again, ${name}!)`
      );
      arr.length = 0;
      break;
    }
    // console.log(correctAnswer);
  }
  if (arr.length === 3) console.log(`Congratulations, ${name}!`);
};

calcGame();
