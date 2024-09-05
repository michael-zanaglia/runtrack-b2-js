function myNearZero(arr){      
    let lowest;
    for(let i = 0; i < arr.length; i++){
        if(!lowest){
            lowest = arr[i];
        } else {
            if( arr[i]**2 < lowest**2){
                lowest = arr[i]
            }
        }
        
    }
    return lowest;
}

const res = myNearZero([3, 8, 4, 2, 5]);
const res2 = myNearZero([-1, -4, 2, 5, 6, 9]);
console.log(res);
console.log(res2);