function myCountChar(myString, char){
    let count = 0;
    for(let i = 0; i < myString.length; i++){
        if(myString[i] === char){
            count += 1;
        }
    }
    return count;
}

let res = myCountChar("Hello world !", "o");
console.log("Il y a", res);