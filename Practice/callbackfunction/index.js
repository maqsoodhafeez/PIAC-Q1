"use strict";
function printInput(callbackfn) {
    let name = 'Maqsood';
    callbackfn(name);
}
printInput(function (name) {
    console.log(`Hello ${name}`);
});
