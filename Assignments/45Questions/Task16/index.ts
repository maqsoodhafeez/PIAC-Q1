// Question 16
// More Guests: You just found a bigger dinner table, so now more space is 
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to 
// the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to 
// add one new guest to the end of your list. • Print a new set of 
// invitation messages, one for each person in your list.

let guestList:string[] =['Ali', 'Asif', 'Aamir']

guestList.forEach( function (value){
    console.log (`Mr ${value} you are requested for the dinner party`);
})

let notInvitedPerson:string = 'Asif'
console.log (`\nSorry ${notInvitedPerson} you are not invited for the dinner`)

let newInvitedPerson:string = 'Bilal'
guestList.indexOf(notInvitedPerson);

guestList[guestList.indexOf(notInvitedPerson)] = newInvitedPerson;

console.log("\nNew invited list is ")
guestList.forEach( function (value){
    console.log (`Mr ${value} you are requested for the dinner party`);
})

console.log ('\nFortunately a bigger table is available so i will invite three more peoples\n')
//Add in the begining of the array
let begGuest:string = "Fahad"
guestList.unshift(begGuest);

//Add in the middle of the array
let middleGuest:string = "Maqsood"
guestList.splice(guestList.length/2, 0, middleGuest )

//Add at the end of array
let endGuest:string = "Sumair"
guestList.push (endGuest);
console.log("\nNew invited list is ")
guestList.forEach( function (value){
    console.log (`Mr ${value} you are requested for the dinner party`);
})