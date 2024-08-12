// Question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.


let guestList:string[] =['Ali', 'Asif', 'Aamir']

console.log (`\n${guestList.length} are invited for the dinner`)
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

console.log (`${guestList.length} are invited for the dinner`)
console.log("\nNew invited list is ")

guestList.forEach( function (value){
    console.log (`Mr ${value} you are requested for the dinner party`);
})

//Informing that desired table is not availble so you have only two seats are 
//available at that time

console.log('\n\nSorry guys once again. I did not find the desired table availble.\nSo this time i can invite only 2 people for the dinner');
console.log ("Old guest list ", guestList)

//Delete from the list until 2 persons are remaining
do {
    console.log (`Sorry ${guestList[0]} you are not invited`)
    guestList.splice(0,1);
}
while(guestList.length !=2)

console.log (`\n${guestList.length} are invited for the dinner`)
console.log ("\nNew guest list ", guestList)

//Invite the remainig 2 guest to the dinner party
guestList.forEach( function (value){
    console.log (`Mr ${value} you are requested for the dinner party`);
})

//delete all the persons into the list
while(guestList.length>0) {
   // console.log (guestList);
    guestList.splice(0,1);
}

//Print Empty guest list
console.log (`\n${guestList.length} are invited for the dinner`)
console.log ("\nFinally the guest list is " ,guestList);