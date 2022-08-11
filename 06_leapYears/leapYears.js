const leapYears = function(value) {
    if(value < 0){
        return false;
    }

    if(value <= 100){ 
        if(value%4 == 0){
            return true;
       }else return false;
    }

    if(value%100 == 0){
        return value % 400 == 0;
    }

    return value % 4 == 0;

};

// Do not edit below this line
module.exports = leapYears;
