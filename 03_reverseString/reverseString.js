const reverseString = function(word) {
    let wordLen = word.length;
    let reverseWord = ""
    if (wordLen === 0) return "";
    for (let i = wordLen; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }
    return reverseWord;
    // return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
