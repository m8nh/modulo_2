import { fizzBuzz } from './lib';

describe(name: 'fizzBuzz()', fn:() => {
    test(name: 'test fizzbuzz', fn() => {
        let result = fizzBuzz(15)
        expect(result).toBe('FizzBuzz');
    });
});