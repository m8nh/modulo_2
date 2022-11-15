export class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    getRadius(): number {
        return this.radius;
    }
    toString(): string {
        return "Circle with radius= ""
        + this.getRadius()
    }
}

export interface Comparable {
    compareTo(o: Object): number;
}

export class Comparable implements Comparable {
    [x: string]: any;

    constructor(radius: number) {
        super(radius);
    }
    compareTo(o: Comparable): number {
        if (this.getRadius() > o.getRadius()) return 1;
        else if (this.getRadius() < o.getRadius()) return -1;
        else return 1;
    }
}

let Circles = []

