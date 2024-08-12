import inquirer from "inquirer";

let cond:boolean;

let ccyConversion = {
    "PKR":{
        "USD":0.0036,
        "SAR":0.0135,
        "CAD":0.0049,
        "AUD":0.0055,
        "PKR":1
    },
    "USD":{
        "PKR":277.8327,
        "SAR":3.7507,
        "CAD":1.3566,
        "AUD":1.5344,
        "USD":1
    },
    "SAR":{
        "PKR":74.0756,
        "USD":0.2666,
        "CAD":0.3617,
        "AUD":0.4091,
        "SAR":1
    },
    "CAD":{
        "PKR":204.7891,
        "USD":0.7371,
        "SAR":2.7647,
        "AUD":1.1309,
        "CAD":1
    },
    "AUD":{
        "PKR":181.0900,
        "USD":0.6518,
        "SAR":2.4448,
        "CAD":0.8842,
        "AUD":1
    }
       
};

//console.log( ccyConversion["PKR"]["USD"] );
do {
    let answer :{
        from :"PKR" | "USD" | "SAR" | "CAD"| "AUD",
        to: "PKR" | "USD" | "SAR" | "CAD"| "AUD",
        amount:number
    } = await inquirer.prompt([
        {name:"from", type:"list", choices:["PKR","USD","SAR","CAD","AUD"], message:"Select your base currency"},
        {name:"to", type:"list", choices:["PKR","USD","SAR","CAD","AUD"], message:"Select your conversion currency"},
        {name:"amount", type:"number", message: "Enter your amount to convert"}
    ]);

    let {from, to, amount} = answer ;

    //If all the field have valules
    if (from && to && amount){
    let convResult = ccyConversion[from][to] * amount;

    console.log (`\n Thank you for using currency conversion. Your conversion from ${from} to ${to} is ${convResult}`);
    }
    else{
        console.log("Please enter valid inputs")
    };

    const continueConv = await inquirer.prompt([
        { name:"continue", type:"confirm", message:"Do you want to add more to do items?"}
    ])
    cond = continueConv.continue;
}
while (cond)