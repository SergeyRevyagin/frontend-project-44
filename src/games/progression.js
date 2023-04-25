import {getRandomIndex} from '../getRandom.js';
import {gameLogic} from '../index.js';

const progressionLength = getRandomIndex(5,10);
const gameDescription = 'What number is missing in the progression?';

const getAritmeticProgression = (firstNumber, step) => {
  let progressionNumber = getRandomIndex(0, 100);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const startBrainCalcCore = () => {
  const firstNumber = getRandomIndex(0, 100);
  const step = getRandomIndex(1, 10);
  const progression = getAritmeticProgression(firstNumber, step);
  const randomIndex = getRandomIndex(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const questionOutput = progression.join(' ');
  const question = `${questionOutput}`;

  return [question, correctAnswer];
};

const start = () => {
  gameLogic(startBrainCalcCore, gameDescription);
};

export default start;