export class Producto {
    name!: string;
    price!: number;
    amount!: number;
    company!: string;
    id!: number;
    brand!: string;

    constructor(name: string, price: number, amount: number, company: string) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.company = company;
    }

    getName(): string { return this.name; }
    getPrice(): number { return this.price; }
    getAmount(): number { return this.amount; }
    getCompany(): string { return this.company; }

    setName(value: string) { this.name = value; }
    setPrice(value: number) { this.price = value; }
    setAmount(value: number) { this.amount = value; }
    setCompany(value: string) { this.company = value; }
}