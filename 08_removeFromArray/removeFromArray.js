const removeFromArray = function(array, ...args) {
    newArray = array.slice()
    for (arg of args) {
        index = newArray.indexOf(arg)
        while (index !== -1) {
            console.log(index)
            newArray.splice(index, 1)
            index = newArray.indexOf(arg)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
