// Question 20
// Think of something you could store in a array. For example, you could make a list 
// of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

let mountainLst :string[] =["Everest", "K2","Himalya"]
let riverLst: string[] = ["Indus", "Jhelum"]
let countryLst: string[] = ["Pakistan", "India"]

let prntLst: Array<Array<string>> = [mountainLst, riverLst, countryLst]
let prntLst2 :string[][] = [mountainLst, riverLst, countryLst]

console.log(prntLst);
console.log (prntLst.indexOf(mountainLst));

console.log("Mountain List")
prntLst[prntLst.indexOf(mountainLst)].forEach (function (value) {
    console.log (` ${value}`)
});

console.log("\n\nRiver List")
prntLst[prntLst.indexOf(riverLst)].forEach (function (value) {
    console.log (` ${value}`)
});

console.log("\n\Country List")
prntLst[prntLst.indexOf(countryLst)].forEach (function (value) {
    console.log (` ${value}`)
});