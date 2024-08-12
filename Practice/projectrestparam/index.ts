function halfFryEgg(egg: number = 1, ... ingredients: number[]) {
    console.log(egg);
    console.log(ingredients); // Rest parameters
    console.log(...ingredients); // Spread operator
}
halfFryEgg (3, 2,5,7);
halfFryEgg (7, 1,2,3);

let arrowfunction =  () =>    1 + 3 + 4 ;

let response : number  = arrowfunction();
console.log (` Arrow function 1 ${response} `);

let arrowfunction2 =  (egg: number  , butter: number , salt: number) => (
    egg+ butter+ salt
);
let response2 : number  = arrowfunction2(3,4,6);
console.log (` Arrow function 2 ${response2} `);


let arrowfunction3 =  () =>   { return  1 + 3 + 4  };

let response3 : number  = arrowfunction3();
console.log (` Arrow function 3 ${response3} `);