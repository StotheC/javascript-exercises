const palindromes = function (string) {
    const backString = string.toLowerCase().replace(/[^a-z0-9]/g,"");
    return backString.split("").reverse().join("") == backString;
};

// Do not edit below this line
module.exports = palindromes;
