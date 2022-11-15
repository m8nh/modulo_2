export function fizzBuzz(input:any):number | string {

    if (typeof input !== 'number') {
        throw new Error('Expected input to be a number');
    }

    if ((input % 3=== 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    }

    if (input % 3 === 0) {
        return 'Fizz';
    }
    if (input % 5 === 0) {
        return 'Buzz';
    }
    return input
}
console.log(fizzBuzz(15));