function countdown(num: number){
    if (num<=0){
        console.log('Recursion done')
        return;
    }
    console.log(num);
    countdown(num -1);
}
countdown(6);