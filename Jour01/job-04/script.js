function myArraySum(myArray){
    let sum = 0;
    for(let i = 0; i < myArray.length; i++){
        sum += myArray[i];
    }
    return sum;
}

let res = myArraySum([4, 24, 52, 14, 32, 56]);

console.log(res);
