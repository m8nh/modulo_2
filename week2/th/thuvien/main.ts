import { Book } from "./books";
import { Magazine } from "./magazine";
import { Newspaper } from "./newspaper";
import { LibraryManager } from "./libratymanager";

let books: Book[] = []
let magazines: Magazine[] = []
let newspapers: Newspaper[] = []

books.push(new Book(101, "book1", 1000, "adam1", 150))
books.push(new Book(102, "book2", 1200, "adam2", 160))
books.push(new Book(103, "book3", 1300, "adam3", 170))

magazines.push(new Magazine(104, "magazine1", 2050, 1234, 2))
magazines.push(new Magazine(105, "magazine2", 2060, 1357, 3))
magazines.push(new Magazine(106, "magazine3", 2070, 1246, 4))

newspapers.push(new Newspaper(107, "newspaper1", 3000, new Date("2022-11-01")))
newspapers.push(new Newspaper(108, "newspaper2", 3100, new Date("2022-11-03")))
newspapers.push(new Newspaper(109, "newspaper3", 3200, new Date("2022-11-05")))

let library = new LibraryManager(books, magazines, newspapers)
// console.log(library);
library.showNewspaper()
library.addMagazine(new Magazine(110, "magazine4", 2080, 2468, 6))
library.showMagazine()
library.removeBook(books[0])
library.showBook();
library.searchCode(108)