"use strict";
// Question 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let car = 'subaru';
// • Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I preditct True.");
console.log(car == 'subaru');
console.log("Is car == 'Toyota'? I preditct false.");
console.log(car == 'Toyota');
console.log("Is car != 'Toyota'? I preditct True.");
console.log(car != 'Toyota');
console.log("Is car != 'subaru'? I preditct false.");
console.log(car != 'subaru');
// • Tests using the lower case function
console.log("Is car.toLowerCase ()  == 'subaru'? I preditct True.");
console.log(car.toLowerCase() == 'subaru');
console.log("Is car.toLowerCase ()  == 'Toyota'? I preditct false.");
console.log(car.toLowerCase() == 'Toyota');
// • Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
let x = 15;
console.log("Is x== 15 ? I preditct True.");
console.log(x == 15);
console.log("Is x != 15 ? I preditct false.");
console.log(x != 15);
console.log("Is x > 9 ? I preditct True.");
console.log(x > 9);
console.log("Is x < 9 ? I preditct false.");
console.log(x < 9);
console.log("Is x >= 9 ? I preditct True.");
console.log(x >= 9);
console.log("Is x <= 9 ? I preditct false.");
console.log(x <= 9);
// • Tests using "and" and "or" operators
console.log("Is (car=='subaru') && (car.length==6)? I preditct True.");
console.log((car == 'subaru') && (car.length == 6));
console.log("Is (car=='subaru') && (car.length==4)? I preditct false.");
console.log((car == 'subaru') && (car.length == 4));
console.log("Is (car=='subaru') || (car.length==8)? I preditct True.");
console.log((car == 'subaru') || (car.length == 8));
console.log("Is (car=='Subaru') || (car.length==8)? I preditct false.");
console.log((car == 'Subaru') || (car.length == 8));
// • Test whether an item is in a array
let country = ["Pakistan", "China", "Russia"];
if (country.includes("China")) {
    console.log("China is an array item");
}
// • Test whether an item is not in a array
if (!country.includes("UK")) {
    console.log("UK is not an array item");
}
