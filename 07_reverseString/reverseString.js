const reverseString = function(string) {
    let leters = string.split("")
    let reversed = ""
    for (leter of leters) {
        reversed = leter + reversed
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
