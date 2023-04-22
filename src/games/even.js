import readlineSync from 'readline-sync';
import welcome from '..//cli.js';

export default () =>{
    const min = 0;//значения можно поменять
    const max = 100;//значения можно поменять
    const f = true;
    let index = 0;

const name = welcome();
const getRandomIndex = (min,max) => Math.floor(Math.random() * (max - min) + min);

//определяем четное число или нет. 
const numIsEven = (number) => (number % 2 === 0);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
while(index < 3){
if(index < 3){
const number = getRandomIndex(min,max);
console.log(`Question: ${number}`);//выводим рандомное число
const answer = readlineSync.question('Yout answer: ');
if(answer ==='yes' && numIsEven(number) === true ){
console.log(`Correct!`);
index += 1;
}else if(answer ==='no' && numIsEven(number) === false){
console.log(`Correct!`);
index += 1;
}else{
    if(answer === 'no'){
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${name}!`);
        break;
    
    }else if(answer === 'yes'){
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${name}!`);
        break;
    }else{
        console.log(`sorry, wrong choice..Let's try again, ${name}!`)
        break;
    }
    
}
}if(index === 3){
    console.log(`Congratulations, ${name}`);
}
}

}
