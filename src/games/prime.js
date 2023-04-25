import {getRandomIndex} from '../getRandom.js';
import {gameLogic} from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (number) => {
  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const randomInt = getRandomIndex(2, 1000);
  const correctAnswer = isPrimeNumber(randomInt) ? 'yes' : 'no';
  const question = `${randomInt}`;

  return [question, correctAnswer];
};

const start = () => {
  gameLogic(getQuestionAndAnswer, gameDescription);
};
export default start;