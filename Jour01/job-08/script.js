function myArraySort(arr, order){      
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(order === "ASC" && arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            } else if(order === "DESC" && arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
        
    }
    return arr;
}

const res = myArraySort([3, 8, 4, 2, 5], "ASC");
const res2 = myArraySort([-1, -4, 2, 5, 6, 9], "DESC");
console.log(res);
console.log(res2);