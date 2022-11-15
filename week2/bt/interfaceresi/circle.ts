import { Shape } from "./shape";
import { Resizeable } from "./resizeable";

export class Circle extends Shape implements Resizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize(percents: number): string {
        return `CircleArea:
        Before: ${this.calculateArea()}
        After: ${this.calculateArea() * (1 + percents / 100)}`
    }
}