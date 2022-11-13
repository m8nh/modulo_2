"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var laptop = new product_1.Product("Laptop", 20000);
var tablet = new product_1.Product("Tablet", 40000);
var productManager = new product_1.ProductManager();
productManager.add = laptop;
productManager.add = tablet;
console.log(productManager.getAll);
