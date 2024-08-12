#! /usr/bin/env node
/*
import inquirer from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';

const answer = await inquirer.prompt([
    {name : 'firstNumber' , type : 'number', message : 'Enter your first number'},
    {name : 'secondNumber' , type : 'number', message : 'Enter your second number'},
    {name : 'operator' , type : 'list', message : 'Select one of the operator to perform action',
     Choices:['Addition', 'Substraction', 'Multiplication', 'Division']}
]);

switch (answer.operator){
    case 'Addition' : {
        console.log(answer.firstNumber + answer.secondNumber);
        break;
    }
    case 'Substraction' : {
        console.log(answer.firstNumber - answer.secondNumber);
        break;
    }
    case 'Multiplication' : {
        console.log(answer.firstNumber * answer.secondNumber);
        break;
    }
    case 'Division' : {
        console.log(answer.firstNumber / answer.secondNumber);
        break;
    }
    default : {
        console.log('Please select a valid operator');
        break;
    }
}*/
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { name: 'firstNumber', type: 'number', message: 'Enter your first number' },
    { name: 'secondNumber', type: 'number', message: 'Enter your second number' },
    {
        name: 'operator',
        type: 'list',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
        message: 'Select one of the operator to perform action',
    },
]);
if (answer.operator === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log('Please select a valid operator');
}
