export class Triangle {
    isTriangle(a: number, b: number, c: number): string {
        if (a === b && b === c) return "Tam giac deu";
        if ((a * a === (b * b + c * c)) || (b * b === (c * c + a * a)) || (c * c === (a * a + b * b))) return "Tam giac vuong";
        if ((a + b) > c && (b + c) > a && (a + c) > b) {
            if (a === b || b === c || a === c) return "Tam giac can";
            return "Tam giac thuong";
        }
        return "Khong phai tam giac";

    }
}

describe('Triangle Test', () => {
    let triangle = new Triangle;

    test('Return tam giac deu', () => {
        expect(triangle.isTriangle(2, 2, 2)).toBe('Tam giac deu');
    })
    test('Return tam giac vuong', () => {
        expect(triangle.isTriangle(3, 4, 5)).toBe('Tam giac vuong');
    })
    test('Return tam giac can', () => {
        expect(triangle.isTriangle(2, 2, 3)).toBe('Tam giac can');
    })
    test('Return khong phai tam giac', () => {
        expect(triangle.isTriangle(8, 2, 3)).toBe('Khong phai tam giac');
    })
})