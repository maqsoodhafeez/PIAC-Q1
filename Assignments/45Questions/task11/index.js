"use strict";
// Question 11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, 
// one at a time.
let nameArray = ["Syed", "Maqsood", "Hafeez"];
//Through loop
console.log("Through simple loop");
for (var i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}
//Through loop
console.log("\n\nThrough loop");
for (var j in nameArray) {
    console.log(nameArray[j]);
}
//Through for each
console.log("\n\nThrough for each");
nameArray.forEach(function (value) {
    console.log(value);
});
