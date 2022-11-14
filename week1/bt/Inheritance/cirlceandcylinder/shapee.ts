export class Shape {
    private _color: string = 'green';
    private _filled: boolean = true;

    constructor( color: string, filled: boolean){
        this._color = color;
        this._filled = filled;
    }
    public getColor(): string {
        return this._color;
    }
    public isFilled(): boolean {
        return this._filled;
    }
    public setColor( color: string ): void {
        this._color = color;
    }
    public setFilled( filled: boolean ): void {
        this._filled = filled;
    }
    public toString(): string {
        return 'A shape with color of '
        + this.getColor()
        +'and filled of '
        + (this.isFilled() ? 'filled': 'not filled');
    }
}