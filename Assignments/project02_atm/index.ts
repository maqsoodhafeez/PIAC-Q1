import inquirer from "inquirer";

let balAmount = 20000;

let answer = await inquirer.prompt ([
    {name: "usrId", type: "input", message: "Enter your user id." },
    {name:"usrPin", type:"number", message:"Enter your pin."}
])

if ((answer.usrPin==123456)){ // (answer.usrId ==="maqsood") && 
   let opAnswer = await inquirer.prompt ([
    {name: "options" , type: "list", message :"Please select options", 
    choices:["Cash Withdrawl", "Balance Inquiry", "Cash Deposit" ] }
   ])
   
   if (opAnswer.options=="Cash Withdrawl") {
    let opAnswer  = await inquirer.prompt([
        {name:"amount", type:"number", message: "Enter your amount."}
    ])  
    balAmount -= opAnswer.amount ;
    console.log ("Thank you for cash withdrawl. Your current balance is " + balAmount); 

   }
   else if (opAnswer.options=="Balance Inquiry"){
    console.log ("Thank you for balance Inquiry. Your current balance is " + balAmount); 

   }
   else if (opAnswer.options =="Cash Deposit") {
    let opAnswer  = await inquirer.prompt([
        {name:"amount", type:"number", message: "Enter your amount."}
    ]) 
    balAmount += opAnswer.amount ;
    console.log ("Thank you for cash deposit. Your current balance is " + balAmount); 

   }
}
else {
    console.log ("Incorrect User Id or Pin")
}
  