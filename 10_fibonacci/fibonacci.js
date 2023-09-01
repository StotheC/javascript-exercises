const fibonacci = function(e) {
 if (e < 0) return "OOPS";
 if (e === 0) return 0;

 let prevFirst = 1;
 let prevSecond = 0;
 
 for (let i = 2; i <= e; i++) {
    let current = prevFirst + prevSecond;
    prevSecond = prevFirst;
    prevFirst = current;
 }

 return prevFirst;

};

// Do not edit below this line
module.exports = fibonacci;
