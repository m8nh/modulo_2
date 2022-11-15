import { ReadLine } from "readline";
import { Resizeable } from "./resizeable";
import { Rectangle } from './rectangle';

export class Square extends Rectangle implements Resizeable {
    [x: string]: any;
    constructor(name: string,
        width: number) {
        super(width, width, name);
    }
    resize(percents: number): string {
        return `SquareArea:
        Before: ${this.calculateArea()}
        After: ${this.calculateArea() * (1 + percents / 100)}`
    }
}

