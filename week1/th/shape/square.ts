import { Rectangle } from "./rectangle";

export class Square extends Rectangle{

    constructor(side: number, color: string, filled: boolean){
        super(side, side, color, filled);
    }
    
    public getSlide(): number{
        return this.getWidth();
    }
    public setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    //Override method
    public setWidth(width: number): void {
        this.setSide(width);
    }
    public setLength(length: number): void {
        this.setSide(length);
    }
    public toString():string {
        return "Square = "
        + this.getSlide();
        + " , whitch is a subsclass of"
        + super.toString()
    }
}

let square: Square = new Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());
