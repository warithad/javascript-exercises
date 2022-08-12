const fibonacci = function(value) {
    if(value < 0) return 'OOPS';
    if(value == 1|| value == 2) return 1;

    let a = 1;
    let b = 1;

    let ans = 0;

    for(let i = 3; i <= value; i++){
        ans = a+b;
        a =b;
        b = ans;
    }

    return ans;
};

// Do not edit below this line
module.exports = fibonacci;
