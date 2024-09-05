function myPrimeList(limit){
    let primeNum = [];
    let ind = 0;
    for(let i = 1; i < limit; i++){
        let count = 0;
        for(let j = 1; j < limit; j++){
            if(i%j=== 0){
                count += 1;
            }
        }
        if(count === 2){
            primeNum[ind] = i;
            ind++;
        }
    }
    return primeNum;
}

const res = myPrimeList(18);

console.log(res);