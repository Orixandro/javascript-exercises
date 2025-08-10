const palindromes = function (string) {
    let punctuationLess = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')
    let array = punctuationLess.split("")
    let simpleArray = array.filter((leter) => (leter !== " "))
    return (simpleArray.toString().toLowerCase() === simpleArray.reverse().toString().toLowerCase())
};

// Do not edit below this line
module.exports = palindromes;
