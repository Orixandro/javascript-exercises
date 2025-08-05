const sumAll = function(int1, int2) {
    if ((typeof int1 !== "number") || (typeof int2 !== "number")) {
        return "ERROR"
    }
    if ((Math.floor(int1) !== int1) || (Math.floor(int2) !== int2)) {
        return "ERROR"
    }
    if ((int1 < 0) || (int2 < 0)) {
        return "ERROR"
    }

    let small = int1
    let big = int2
    let result = 0

    if (int1 > int2) {
        small = int2
        big = int1
    }
    
    for (let i = small; i <= big; i++) {
        result = result + i
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
