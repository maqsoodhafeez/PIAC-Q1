// Question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let places:string[] = ["Saudia Arabia" , "Russia", "United Kingdon", "Malaysia", "America"]

// • Print your array in its original order.
console.log ("Orignal Order of List ", places)

// • Print your array in alphabetical order without modifying the actual list.
console.log ("Alphabetical Order without changing the List",[...places].sort())

// • Show that your array is still in its original order by printing it.
console.log ("Orignal Order of List ", places)

// • Print your array in reverse alphabetical order without changing the order of the 
// original list.
console.log ("Reversed Alphabetical Order without changing the List ", [...places].reverse())

// • Show that your array is still in its original order by printing it again.
console.log ("Orignal Order of List ", places)

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log ("Reverse Order of List ", places.reverse())

// • Reverse the order of your list again. Print the list to show it’s back to its 
// original order.
console.log ("Back to Orignal Order of List ", places.reverse())

// • Sort your array so it’s stored in alphabetical order. Print the array to show that 
// its order has been changed.
console.log ("Alphabetical Order of the List",places.sort())

// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
console.log ("Reverse Order of List ", places.reverse())
// places.sort((a,b)=> b.localeCompare(a))
// console.log ("Reverse Order of List ", places.reverse())
// places.sort((a,b)=> a.localeCompare(b))
// console.log ("Reverse Order of List ", places.reverse())