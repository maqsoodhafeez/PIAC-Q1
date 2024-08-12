import inquirer from "inquirer";

let toDoList : String [] = [];
let loopCond:boolean = false;

do {
    
   let answers = await inquirer.prompt([
        { name:"toDoItem", type:"input", message:"Kindly add your to do items."},
        { name:"addMoreItem", type:"confirm", message:"Do you want to add more to do items?"}
    ])
    loopCond = answers.addMoreItem ;
    if (toDoList.length > 0 ) {
        toDoList.push(answers.toDoItem);
    }else {
        console.log ("Kindy add valid to do item.")
    }

} while (loopCond);
if (toDoList.length > 0 ) {
    console.log("Your to do items are " );        
    toDoList.forEach(toDoItem => {
        console.log(toDoItem);        
    })
}
//console.log("Your to do items are " + toDoList);
