"use strict";
function abc(a = 1, ...b) {
    console.log(a);
    console.log(b);
    console.log(...b);
}
abc(2, 5, 7, 9, 3, 8);
