#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\t\n\t Welcome To Riza Shakeel Number_Guessing_Game\t \n\t");
const randomnumber = Math.floor(Math.random() * 20 + 1);
const answer = await inquirer.prompt([
    {
        name: "useguessingnumber",
        type: "number",
        message: "Enter your guess number(Number LImit 1 to 20)",
    }
]);
if (answer.useguessingnumber === randomnumber) {
    console.log(chalk.magenta("\n\tCongratulation! you guess a correct number\t\n"));
}
else {
    console.log(chalk.blueBright("\n\tSorry you guess a wrong number\t\n"));
}
;
