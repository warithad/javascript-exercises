const repeatString = function(word, number) {
    if (number < 0) return 'ERROR';
    let ans = '';
    let times = 0;
    while(times < number){
        ans += word;
        times++;
    }
    return ans;
};
// Do not edit below this line
module.exports = repeatString;
