class Programmer {
    private _id: number
    private _name: string
    private _salary: number

    constructor(id: number, name: string, salary: number) {
        this._id = id
        this._name = name
        this._salary = salary
    }

    getId(): number {
        return this._id
    }
    getName(): string {
        return this._name
    }
    getSalary(): number {
        return this._salary
    }
    setSalary(salary: number) {
        this._salary = salary
    }
    setName(name: string){
        this._name = name
    }
    setId(id: number){
        this._id = id
    }
}

class JSProgrammer extends Programmer {
    constructor(id: number, name: string, salary: number) {
        super(id, name, salary)
    }
}

class JavaProgramer extends Programmer {
    constructor(id: number, name: string, salary: number) {
        super(id, name, salary)
    }
}

class PhpProgrammer extends Programmer {
    constructor(id: number, name: string, salary: number) {
        super(id, name, salary)
    }
}

class ProgrammerManager {
    private _programmerList: Programmer[]

    getProgrammer(): Programmer[]{
        return this._programmerList
    }

    addProgrammer(programmer: Programmer):void {
        this._programmerList.push(programmer)
    }
    maxSalary(): number {
        return this._programmerList.reduce((max, progammer) => Math.max(
            max, 
            progammer.getSalary()),0);
    }
    sortSalary(): Programmer[] {
        return this._programmerList.sort((a, b) => a.getSalary() - b.getSalary());

    }
}

let programmerManager = new ProgrammerManager();

let jsProgrammer = new JSProgrammer(101,'x', 2000)
let javaProgrammer = new JavaProgramer(102,'c', 3000)
let phpProgrammer = new PhpProgrammer(103,'', 2500)

programmerManager.addProgrammer(jsProgrammer);
programmerManager.addProgrammer(javaProgrammer);
programmerManager.addProgrammer(phpProgrammer);

console.log(programmerManager.maxSalary());
console.log(programmerManager.sortSalary());

