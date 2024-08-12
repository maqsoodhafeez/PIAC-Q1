"use strict";
// Question 13
// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
let favTransportation = ['Honda Motorcycle', 'Honda Civic'];
//1 Method to print the favourite Transportation
console.log("1 Method to print the favourite Transportation");
console.log(`I would like to own a ${favTransportation[0]}`);
console.log(`I would like to own a ${favTransportation[1]} \n`);
//2 Method to print the favourite Transportation
console.log("2 Method to print the favourite Transportation");
favTransportation.forEach(function (value) {
    console.log(`I would like to own a ${value}`);
});
//3 Method to print the favourite 
console.log("\n3 Method to print the favourite Transportation");
for (let i in favTransportation) {
    console.log(`I would like to own a ${favTransportation[i]}`);
}
//4 Method to print the favourite 
console.log("\n4 Method to print the favourite Transportation");
favTransportation.map((j) => console.log(`I would like to own a ${j}`));
