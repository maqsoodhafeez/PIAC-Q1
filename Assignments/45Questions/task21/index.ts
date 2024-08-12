// Question 21
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

let student: {name:string, age:number, grade:number} 

 //{name:"Ali", age:22, grade:2}

 //let student2: {name:string, age:number, grade:number} =
//  {name:"Ahmed", age:23, grade:1}



let students :Array<typeof student> = [];
// students.push(student);
students.push({name:"Ali", age:22, grade:2});
students.push({name:"Ahmed", age:20, grade:1});

students.forEach(function(value){
console.log (value)
})