function mySquareArray(arr){
    for(let i = 0; i < arr.length; i++){
        let squareN = arr[i]**2;
        arr[i] = squareN;
    }
    return arr;
}

const res = mySquareArray([3, 8, 4, 2, 5]);

console.log(res);