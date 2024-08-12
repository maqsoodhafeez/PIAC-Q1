import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { name: "sentense", type: "input", message: "Enter your sentence to count the word without whitespace" }
]);
let newSentence = answer.sentense.trim().split(" ").join("");
console.log(`Your new sentense after whitespace removal is ${newSentence}`);
console.log(`Your new sentense word count is ${newSentence.length}`);
/*
let str: string = "My Name is Maqsood Hafeez "+"\r\n"+"and work in IT industry"
console.log (`Your  sentense  is ${str}`);
//Remove all whitespaces
console.log (`Your new sentense after whitespace removal is ${str.trim().split(" ").join("").replace(/\s+/g,"")}`);
console.log (`Your new sentense word count is ${str.trim().split(" ").join("").length}`);1
*/ 
