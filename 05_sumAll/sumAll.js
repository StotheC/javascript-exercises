const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";
    if (x > y) {
        const temp = x;
        x = y;
        y = temp;
    }
    let num = 0;
    for (let i = x; i <= y; i++) {
        num += i;
    }
    return num;
};

// Do not edit below this line
module.exports = sumAll;
