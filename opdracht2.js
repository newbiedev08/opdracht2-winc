

const verifyAge = function (age) {
        if (age < 18) {
            return 'Sorry you are not allowed to enter.';
        } else {
            return 'Welcome, you may enter!';
        }
    }
const allow = verifyAge(17);
console.log(allow);


const verifyGender = function (gender) {
    if (isFemale) {
        return 'You may enter';
    } else {
        return 'Sorry, only for girls!'
    }
}

const allow = verifyGender(isFemale);
console.log(allow);


