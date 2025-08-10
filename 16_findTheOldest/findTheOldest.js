const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldest, person) => {
        let death

        if (person.yearOfDeath === undefined) {
            let today = new Date
            death = today.getFullYear()
        } else {
            death = person.yearOfDeath
        }

        let oldestDeath

        if (oldest.yearOfDeath === undefined) {
            let today = new Date
            oldestDeath = today.getFullYear()
        } else {
            oldestDeath = oldest.yearOfDeath
        }

        let age = death - person.yearOfBirth

        let oldestAge = oldestDeath - oldest.yearOfBirth

        if (age > oldestAge) {
            return person
        } else {
            return oldest
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
