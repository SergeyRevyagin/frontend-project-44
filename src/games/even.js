import getRandomIndex from '../getRandom.js';
import gameLogic from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startBrainEvenCore = () => {
  const randomInt = getRandomIndex(1, 101);
  const question = `${randomInt}`;

  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const start = () => {
  gameLogic(startBrainEvenCore, gameDescription);
};

export default start;
