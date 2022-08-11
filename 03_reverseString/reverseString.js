const reverseString = function(word) {
    let rev = '';
    for(let i = word.length -1; i >= 0; i--){
        rev += word.charAt(i);
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
