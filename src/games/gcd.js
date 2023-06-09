import getRandomIndex from '../getRandom.js';
import gameLogic from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (randomInt1, randomInt2) => {
  if (randomInt1 === 0 || randomInt2 === 0) {
    return randomInt1 + randomInt2;
  }
  if (randomInt1 > randomInt2) {
    return getGcd(randomInt1 - randomInt2, randomInt2);
  }
  return getGcd(randomInt1, randomInt2 - randomInt1);
};
const startBrainGcdCore = () => {
  const randomInt1 = getRandomIndex(1, 100);
  const randomInt2 = getRandomIndex(1, 100);

  const question = `${randomInt1} ${randomInt2}`;
  const correctAnswer = String(getGcd(randomInt1, randomInt2));

  return [question, correctAnswer];
};

const start = () => {
  gameLogic(startBrainGcdCore, gameDescription);
};

export default start;
