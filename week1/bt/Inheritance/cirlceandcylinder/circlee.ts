import { Shape } from "./shapee";

export class Circle extends Shape {
    private radius:number = 1.0;

    constructor(radius: number, color: string, filled: boolean){
        super(color, filled);
        this.radius = radius;
    }
    
    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }
    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    public getPerimeter(): number {
     return 2 * Math.PI * this.radius;
    }
    public toString(): string {
        return 'A Circle witch raduis = '
        + this.getRadius()
        + 'cm';
        + super.toString();
    }
}