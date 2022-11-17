import { BasicCalculator  } from "./app";

describe('BasicCalculator', () => {
    let calc: BasicCalculator = new BasicCalculator();

    test('should return an instance of a basic calculator', () => {
        expect(calc).toEqual({});
    });
    test('should return the addition of a + b', () => {
        expect(calc.add(1,3)).toEqual(4);
    });
    test('should return the substraction of a - b', () => {
        expect(calc.subtract(5,3)).toEqual(2);
    })
    test('should return the multiplication of a*b', () => {
        expect(calc.multiple(2,3)).toEqual(6);
    })
    test('should return the division of a / b', () => {
        expect(calc.divide(2,3)).toEqual(0.5);
    })
})