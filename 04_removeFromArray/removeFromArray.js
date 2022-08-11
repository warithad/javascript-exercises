const removeFromArray = function(array, ...args) {
    const ar = Array.from(args);
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < ar.length; j++){
            if(array[i] === ar[j]){
                array.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return array;
};  

// Do not edit below this line
module.exports = removeFromArray;
