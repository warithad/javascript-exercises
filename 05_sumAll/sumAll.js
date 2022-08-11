const sumAll = function(first, second) {
    if(first < 0 || second < 0|| typeof first !== typeof 1 || typeof second !== typeof 1){
        return 'ERROR';
    } 

    let max = Math.max(first, second);
    let min = Math.min(first, second);

    let ans = Math.floor((max - min + 1)/2 * (max + min));
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
