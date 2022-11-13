import { Product, ProductManager } from "./product";

let laptop = new Product("Laptop", 20000);
let tablet = new Product("Tablet", 40000);

let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = tablet;

console.log(productManager.getAll);
