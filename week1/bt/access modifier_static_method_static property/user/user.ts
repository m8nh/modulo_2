class User {
    private _name: string;
    private _email: string;
    _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }
    get email(): string {
        return this._email;
    }
    get role(): number {
        return this._role;
    }
    setName(): string{
        return this._name;
    }
    setEmail(): string{
        return this._email;
    }
    setRole(): number{
        return this._role;
    }
}

class UserManager {
    private product:User[] = [];

    constructor() {
    }

    getInfo() {
        return this.product;
    }
    getAll(product: User) {
        this.product.push(product);
}
    All(product: User) {
        if ((product.getRole()) === 1) {
            console.log('ADMIN');
        } else {
            console.log('USER');
        }
    }
}

let user0 = new User('Nguyen Van A', 'nguyenvana@gmail.com', 1);
let user1 = new User('Nguyen Van B', 'nguyenvanb@gmail.com', 2);
let user2 = new User('Nguyen Van C', 'nguyenvanc@gmail.com', 2);

let userManager = new UserManager();

userManager.getAll(user0)
userManager.getAll(user1)
userManager.getAll(user2)

console.log(userManager.getInfo())

console.log(userManager.All(user0))