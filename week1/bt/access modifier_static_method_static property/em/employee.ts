export class Empployee {
    private _id !: number
    private _firstName!:string
    private _lastName!:string
    private _dateOfBrith!:string
    private _addrress!:string
    private _job!:string

    constructor(id: number, firstName: string, lastName: string, dateOfBirth: string, address: string, job: string) {
        this._firstName = firstName
        this._lastName = lastName
        this._dateOfBrith = dateOfBirth
        this._addrress = address
        this._job = job
        this._id = id
}

    get id(): number {
        return this._id
    }
    set id(value: number) {
        this._id = value
    }

    get firstName(): string {
        return this._firstName
    }
    set firstName(value: string) {
        this._firstName = value
    }
    get lastName(): string {
        return this._lastName
    }
    set lastName(value: string) {
        this._lastName = value
    }
    get dateOfBrith(): string {
        return this._dateOfBrith
    }
    set dateOfBrith(value: string) {    
        this._dateOfBrith = value
    }
    get addrress(): string {
        return this._addrress
    }
    set addrress(value: string) {
        this._addrress = value}
    get job(): string {
        return this._job
    }
    set job(value: string) {
        this._job = value
    }
}