const fibonacci = function(num) {
    if (typeof num === "string") {
        num = +num
    }
    if (num < 0) {
        return "OOPS"
    }
    let fibNum = 0
    let prev = 1
    let prev2 = 0
    for (let i = 1; i <= num; i++) {
        prev2 = prev
        prev = fibNum
        fibNum = prev + prev2
    }
    return fibNum
};

// Do not edit below this line
module.exports = fibonacci;
