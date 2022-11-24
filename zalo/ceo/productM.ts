import { Producto } from "./prodcut";

export class ProducMange {
    listproducts: Producto[] = [];
    add(t: Producto): void {
        this.listproducts.push(t);
    }
    findByName(name: string): number {
        for (let i = 0; i < this.listproducts.length; i++) {
            if (name === this.listproducts[i].name) {
                return i;
            }
        }
        return -1;
    }

    edit(name: string, t: Producto): void {
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listproducts[index] = t;
        }
    }

    remove(name: string): void {
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listproducts.splice(index, 1);
        }
    }

    findTheApproximateName(t: string) {
        return this.listproducts.filter((el) => el.name.toLowerCase().includes(t.toLowerCase()))
    }

    findByRangeAmount(low: number, high: number) {
        let arr: Producto[] = [];
        for (let i = 0; i < this.listproducts.length; i++) {
            if (this.listproducts[i].price > low && this.listproducts[i].price < high) {
                arr.push(this.listproducts[i])
            }
        }
        return arr;
    }

    sortPriceIncreasing() {
        return this.listproducts.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    sortPriceDecreasing() {
        return this.listproducts.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    sortAmountDecreasing() {
        return this.listproducts.sort(function (a, b) {
            return b.amount - a.amount;
        });
    }

    findByBrand(brand: string) {
        let list: Producto[] = [];
        for (let i = 0; i < this.listproducts.length; i++) {
            if (this.listproducts[i].brand === brand) {
                list.push(this.listproducts[i])
            }
        }
        return list
    }

    display() {
        return this.listproducts;
    }
}

let a = new Producto('12', 10, 1, '1')
let b = new Producto('23', 20, 2, '2')
let c = new Producto('34', 30, 3, '3')
let d = new Producto('45', 40, 4, '1')
let productManager = new ProducMange()
productManager.add(a)
productManager.add(b)
productManager.add(c)
productManager.add(d)
// console.log(productManager.display())
// productManager.edit('12', d)
// console.log(productManager.display())
// productManager.remove('45')
// console.log(productManager.display())
console.log(productManager.findTheApproximateName('3'))
// console.log(productManager.findByRangeAmount(15, 25))
// console.log(productManager.findByBrand('1'))
// console.log(productManager.sortPriceDecreasing())