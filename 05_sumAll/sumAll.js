const sumAll = function(x,y) {
    if (Number.isInteger(x) && Number.isInteger(y)) {
    let count = Math.abs(x - y);
    let startval = Math.min(x , y);
    let sum = startval;
    for (i = 0; i < count; i++) {
        startval = startval + 1
        sum = sum + startval;
    }
    return sum;
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
