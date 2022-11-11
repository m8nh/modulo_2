import { Booka } from "./bookk";
import { BookManager } from "./bookmannger";

let book1 = new Booka('B001', 'Lập trình Java');
let book2 = new Booka('B002', 'Lập trình PHP');
let book3 = new Booka('B003', 'Lập trình TypeScript');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003', 'lập trình MySQL')

console.log(bookManager.getList())