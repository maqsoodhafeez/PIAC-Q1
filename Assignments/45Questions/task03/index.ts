// Question 03
// Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.

let myName:String = "syeD maqsood hafeez"

//Print in a lower case
console.log (`Lower Case Presentation is : ${myName.toLowerCase()} `);

//Print in an upper case
console.log(`Upper Case Presentation is : ${myName.toUpperCase()} `);

//Print in Title case
console.log("Title Case Presentation is : " + myName.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1).toLowerCase()).join(" "));
//console.log(`Title Case Presentation is : ${myName.split(" ").map((l: string) => l[0].toUpperCase() + l.slice(1).toLowerCase()).join(" ") } `);