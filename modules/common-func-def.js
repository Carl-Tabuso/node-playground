const isOddOrEven = (num) => {
    res = num % 2 === 0 ? 'Even' : 'Odd';
    console.log(`Number passed is ${res}.`);
}

const greeting = 'Wassup, dickhead!';
const randomNum = Math.floor(Math.random() * 10);
const isEqToRandNumber = (num) => {
    res = num === randomNum ? 'You fucking guess it!' : 'Try better next time, dumbass!';
    console.log(res);
}

module.exports = { isOddOrEven, isEqToRandNumber, greeting };