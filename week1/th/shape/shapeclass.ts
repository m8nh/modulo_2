export class Shape {
    private color: string = "green";
    private filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    public getColor(): string {
        return this.color;
    }
    public getFilled(): boolean {
        return this.filled;
    }
    public setFilled(filled: boolean): void {
        this.filled = filled;
    }
    public isFilled(filled: boolean): void{
        this.setFilled(filled);
    }
    public toString(): string {
        return "A shape with color of"
        +this.getColor()
        + "and"
        + (this.getFilled()? "filled" : "unfilled");

    }
}

let shape: Shape = new Shape("red", false);
console.log(shape.toString());
console.log(shape);
