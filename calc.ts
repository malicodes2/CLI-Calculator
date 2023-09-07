#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import animation from "chalk-animation";

const seize = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}

async function start() {
    let start = animation.neon("Let's Do Some Calculation");
    await seize();
    start.stop();
}

start();

async function question() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "operation",
            message: "Select the operation you want to perform?",
            choices: ["Division", "Multiplication", "Addition", "Subtraction"]
        },
        {
            type: "number",
            name: "numOne",
            message: "Enter Number One: "
        },
        {
            type: "number",
            name: "numTwo",
            message: "Enter Number Two: "
        }
    ])
    .then((answer) => {
        if(answer.operation == "Division"){
            console.log(`${answer.numOne / answer.numTwo}`);
        }
        else if(answer.operation == "Multiplication"){
            console.log(`${answer.numOne * answer.numTwo}`);
        }
        else if(answer.operation == "Addition"){
            console.log(`${answer.numOne + answer.numTwo}`);
        }
        else if(answer.operation == "Subtraction"){
            console.log(`${answer.numOne - answer.numTwo}`);
        }
    })
}

question();