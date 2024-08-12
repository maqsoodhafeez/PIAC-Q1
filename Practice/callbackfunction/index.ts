function printInput (callbackfn: any){
    let name:string = 'Maqsood'
    callbackfn(name);
}
printInput(function(name:string){
    console.log(`Hello ${name}`);
})