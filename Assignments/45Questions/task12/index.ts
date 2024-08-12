// Question 11
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a 
// message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.

let nameArray:String[] = ["Syed", "Maqsood", "Hafeez"]

//Through loop
console.log ("Through simple loop");
for(var  i = 0;i<nameArray.length;i++) { 
    console.log(`Hello! ${nameArray[i]}`) 
 }

 //Through loop
console.log ("\n\nThrough loop");
 for(var j in nameArray) { 
    console.log(`Hello! ${nameArray[j]}`) 
 } 
 //Through for each
 console.log ("\n\nThrough for each");
nameArray.forEach(function (value){
    console.log (`Hello! ${value}`)
});