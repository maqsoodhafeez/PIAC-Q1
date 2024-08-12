"use strict";
function halfFryEgg(egg = 1, ...ingredients) {
    console.log(egg);
    console.log(ingredients); // Rest parameters
    console.log(...ingredients); // Spread operator
}
halfFryEgg(3, 2, 5, 7);
halfFryEgg(7, 1, 2, 3);
let arrowfunction = () => 1 + 3 + 4;
let response = arrowfunction();
console.log(` Arrow function 1 ${response} `);
let arrowfunction2 = (egg, butter, salt) => (egg + butter + salt);
let response2 = arrowfunction2(3, 4, 6);
console.log(` Arrow function 2 ${response2} `);
let arrowfunction3 = () => { return 1 + 3 + 4; };
let response3 = arrowfunction3();
console.log(` Arrow function 3 ${response3} `);
