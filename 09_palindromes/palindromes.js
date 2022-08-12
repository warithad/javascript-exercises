const palindromes = function (wor) {
    let word = wor.toLowerCase();
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    word = word.replace(regex, '');

    let i = 0;
    let j = word.length- 1;

    while(i < j){
        if(word.charAt(i) == ' ')i++;
        if(word.charAt(j) == ' ')j--;
        if(word.charAt(i) != word.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
