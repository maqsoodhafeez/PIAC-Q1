function abc(a:number =1 , ...b:number[]){
    console.log(a);
    console.log(b);
    console.log(...b);
}

abc(2,5,7,9,3,8);