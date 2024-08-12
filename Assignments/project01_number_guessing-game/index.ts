import inquirer from "inquirer";

let num = Math.floor(Math.random()*100) + 1;
console.log (num);

for (let i =0 ; i< 4 ; i++) {
    let answer = await inquirer.prompt(
        {name : "guess", type: "input", message:"Guess your number between 1 -100" }
    )

    if (answer.guess == num){
        console.log("Congratulation! you guess the correct number");
        break;
    }
    else
    {
        console.log ("Try again");
    }
}