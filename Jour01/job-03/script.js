function myIsInString(myString, sample){
    
    // j'itere le string en prenant en compte de soustraire le nombre de caractere pour eviter de sortir de l'iteration dans la seconde boucle.
    for(let i = 0; i < myString.length - sample.length; i++){
        let found = true;
        for(let j = 0; j < sample.length; j++ ){
            if(myString[i + j] !== sample[j]){
                found = false;
                break;
            }
        }
        if(found){
            return found;
        }
    }
    return false;
}

let res = myIsInString("Hello world !", "llo");
let res2 = myIsInString("Hello world !", "relrel");
console.log(res);
console.log(res2);