class Apllication {
    private name: string;
    static count : number = 0

    constructor(name:string) {
        this.name = name;
        Apllication.count++;
    }
}   
console.log(Apllication.count);
let app1 = new Apllication('app one');
console.log(Apllication.count);
let app2 = new Apllication('app two');
console.log(Apllication.count);
