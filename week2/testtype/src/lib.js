"use strict";
exports.__esModule = true;
exports.fizzBuzz = void 0;
function fizzBuzz(input) {
    if (typeof input !== 'number') {
        throw new Error('Expected input to be a number');
    }
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    }
    if (input % 3 === 0) {
        return 'Fizz';
    }
    if (input % 5 === 0) {
        return 'Buzz';
    }
    return input;
}
exports.fizzBuzz = fizzBuzz;
console.log(fizzBuzz(15));
