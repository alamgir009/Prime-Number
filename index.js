let num = 11;

for(let i = 1; i <= num; i++){
    let isprime = true;
    if(i == 1){
        isprime = false;
    }
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isprime = false;
        }
    }
    if(isprime === true){
        console.log(`${i} Prime`)
    }else{
        console.log(`${i} Not Prime`);
    }
}