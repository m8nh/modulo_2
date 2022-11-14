import { Shape } from "./shapeclass";

export class Circle extends Shape {
  public radius: number = 1.0;

  constructor( radius:number, color: string, filled: boolean) {
    super(color, filled);
    this.radius = radius;
    
  }
  public getRadius(): number {
    return this.radius;
  }
  public setRadius( radius: number ): void {
    this.radius = radius;
  }
  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  public getPerimeter(): number {
    return 2 * this.radius * Math.PI;
  }

  public toString(): string {
      return "A Circle with radius = "
      + this.radius;
      + ", witch is a subsclass of"
      + super.toString()
  }
}

let circle: Circle = new Circle (3.5, "indigo", false);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());





