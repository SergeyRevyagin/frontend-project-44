import getRandomIndex from '../getRandom.js';
import gameLogic from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateExpression = () => {
  const operators = ['+', '-', '*'];
  const generatedExpressionIndex = getRandomIndex(0, 3);
  return operators[generatedExpressionIndex];
};

const getResultOfExpression = (integer1, integer2, expression) => {
  let result;

  switch (expression) {
    case '+':
      result = integer1 + integer2;
      break;
    case '-':
      result = integer1 - integer2;
      break;
    case '*':
      result = integer1 * integer2;
      break;
    default:
      break;
  }

  return result;
};
const generateRound = () => {
  const randomInt1 = getRandomIndex(1, 101);
  const randomInt2 = getRandomIndex(1, 101);
  const randomExpression = generateExpression();
  const question = `${randomInt1} ${randomExpression} ${randomInt2}`;

  const correctAnswer = String(getResultOfExpression(randomInt1, randomInt2, randomExpression));
  return [question, correctAnswer];
};

const start = () => {
  gameLogic(generateRound, gameDescription);
};
export default start;
