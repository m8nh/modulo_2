export class AbsoluteNumberCalculator {
    public static findAbsolute(num: number): number {
        throw new Error("Unsupported Operation Exception");
    }
}

describe("testFindAbsolute0", () => {
    test("testFindAbsolute0", () => {
        let number = 0;
        let expected = 0;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});

describe("testFindAbsolute1", () => {
    test("testFindAbsolute1", () => {
        let number = 1;
        let expected = 1;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});

describe("testFindAbsoluteNegative1", () => {
    test("testFindAbsoluteNegative1", () => {
        let number = -1;
        let expected = 1;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
export class AbsoluteNumberCalculator {
    public static findAbsolute(num: number): number {
        //throw new Error("Unsupported Operation Exception");
        //return 0;

        if (num < 0)
            return -num;
        return num;
    }
}