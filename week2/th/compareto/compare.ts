export class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    getRadius(): number {
        return this.radius;
    }
    toString(): string {
        return "Circle with radius= "
        + this.getRadius()
    }
}

export interface Comparable {
    compareTo(o: Object): number;
}

export class ComparableCircle extends Circle {

    constructor(radius: number) {
        super(radius);
    }

    compareTo(o: ComparableCircle): number {
        if (this.getRadius() > o.getRadius()) return 1;
        else if (this.getRadius() < o.getRadius()) return -1;
        else return 1;
    }
}

let circles = [];
circles[0] = new ComparableCircle(10)
circles[1] = new ComparableCircle(20)
circles[2] = new ComparableCircle(30)

let result = circles[1].compareTo(circles[2]);

if (result == 1) {  
    console.log("Objects are equal");
} else {
    console.log("Objects are not equal");
}
