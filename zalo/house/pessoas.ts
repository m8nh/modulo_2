import { ArrayList } from '../../../week2/th/IArrayLisy/iarraylist';
class People {
    private name!: string;
    private age!:number;
    private profession!:string;
    private idp!:number;

    constructor(name: string, age: number, profession: string, idp: number) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.idp = this.idp
    }

    getName(): string {
        return this.name
    }
    setName(value: string){
        this.name = value
    }
    getAge(): number {
        return this.age;
    }

    setAge(value: number) {
        this.age = value;
    }
    getProfession(): string {
        return this.profession
    }
    setProfession(value: string){
        this.profession = value
    }
    getIdc():number{
        return this.idp
    }
    setIdc(value:number){
        this.idp = value
    }

} 
class Family {
    private person!: number
    private nhouse!: number
    private lperson: People []

    constructor(person: number, nhouse: number, lperson: People[]){
        this.person = person;
        this.nhouse = nhouse;
        this.lperson = lperson;
    }

    getPerson(): number{
        return this.person
    }
    setPerson(value: number){
        this.person = value;
    }
    getNhouse(): number {
        return this.nhouse
    }
    setNhouse(value:number){
        this.nhouse = value
    }
    getLPerson(): People[] {
        return this.lperson;
    }

    setLPerson(value: People[]) {
        this.lperson = value;
    }

}

class Town {
    listFamily: Family[] = [];

    addFamily1(t: Family): void {
        this.listFamily.push(t)
    }

    display() {
        for (let i of this.listFamily) {
            console.log(i);
        }
    }
}

let readlineSync = require("readline-sync");
let town = new Town();

function addPerson(person: number, nhouse: number, lperson: People[]){
    let menu = `---------Menu chính-----------
    1.Thêm người 
    0.Thoát chương trình`
    let t: People[] = []
    let choice = -1;
    do { 
        console.log(menu)
        choice = +readlineSync.question('Entre Choice: ');
        switch (choice) {
            case 1:
                console.log('---------Hiển thị form thêm mới-----------');
                let name = readlineSync.question('Enter name :  ');
                let age = +readlineSync.question('Enter age :  ');
                let job = readlineSync.question('Enter job :  ');
                let id = readlineSync.question('Enter id :  ');
                let person = new People(name, age, job, id);
                t.push(person)
                break;

        }
    } while (choice !== 0);
    let family = new Family(person, nhouse, lperson);
    town.addFamily1(family)
}
