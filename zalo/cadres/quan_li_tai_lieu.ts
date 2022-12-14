class Documents {
    public documentCode: number;
    private publishingCompany: string;
    private releaseNumber: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number) {
        this.documentCode = documentCode;
        this.publishingCompany = publishingCompany;
        this.releaseNumber = releaseNumber;
    }
}

class Book extends Documents {
    private author: string;
    private pageNumber: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number, author: string, pageNumber: number) {
        super(documentCode, publishingCompany, releaseNumber);
        this.author = author;
        this.pageNumber = pageNumber;
    }
}

class Magazine extends Documents {
    numberRelease: number;
    releaseMonth: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number, numberRelease: number, releaseMonth: number) {
        super(documentCode, publishingCompany, releaseNumber);
        this.numberRelease = numberRelease;
        this.releaseMonth = releaseMonth;
    }
}

class Newspaper extends Documents {
    releaseDay: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number, releaseDay: number) {
        super(documentCode, publishingCompany, releaseNumber);
        this.releaseDay = releaseDay;
    }
}

class DocumentManager {
    documentList: Documents[] = [];
    list: Documents[] = [];

    constructor() {
    }

    add(document: Documents) {
        this.documentList.push(document)

    }

    findAll() {
        return this.documentList;
    }

    deleteDocumentById(documentId: number) {
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].documentCode === documentId) {
                this.documentList.splice(i, 1)
            }
        }
        return this.documentList;

    }

    searchDocumentByType(Type: any) {
        this.list = [];
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i] instanceof Type) {
                this.list.push(this.documentList[i])
            }
        }
        return this.list
    }

    check(index: number): number {
        let flag;
        flag = 0
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].documentCode === index) {
                flag++;
            }
        }
        if (flag >= 1) return 1
        else return -1;
    }
}
// ------------------------------------Main-------------------------------------------------------------------------
let readlineSync = require('readline-sync');
let documentManager = new DocumentManager();

function add() {
    let menu = `---------B???n mu???n th??m t??i li???u n??o-----------
    1.S??ch
    2.T???p ch??
    3.B??o
    0.Ra menu ch??nh`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                addMagazine();
                break;
            case 3:
                addNewspaper();
                break;

        }
    } while (choice !== 0);
}

function addBook() {
    console.log('---------Hi???n th??? form th??m m???i-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let author = readlineSync.question('Enter author :  ');
    let pageNumber = +readlineSync.question('Enter tier :  ');
    let book = new Book(documentCode, publishingCompany, releaseNumber, author, pageNumber);
    if (documentManager.check(book.documentCode) === -1) documentManager.add(book);
    else {
        console.log('---------Id ???? t???n t???i, vui l??ng nh???p l???i-----------')
        addBook()
    }
}

function addMagazine() {
    console.log('---------Hi???n th??? form th??m m???i-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let numberRelease = +readlineSync.question('Enter author :  ');
    let releaseMonth = +readlineSync.question('Enter tier :  ');
    let magazine = new Magazine(documentCode, publishingCompany, releaseNumber, numberRelease, releaseMonth);
    if (documentManager.check(magazine.documentCode) === -1) documentManager.add(magazine);
    else {
        console.log('---------Id ???? t???n t???i, vui l??ng nh???p l???i-----------')
        addMagazine()
    }
}

function addNewspaper() {
    console.log('---------Hi???n th??? form th??m m???i-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let releaseDay = +readlineSync.question('Enter author :  ');
    let newspaper = new Newspaper(documentCode, publishingCompany, releaseNumber, releaseDay);
    if (documentManager.check(newspaper.documentCode) === -1) documentManager.add(newspaper);
    else {
        console.log('---------Id ???? t???n t???i, vui l??ng nh???p l???i-----------')
        addNewspaper()
    }
}

function deleteDocumentById() {
    let id = +readlineSync.question('Enter id need to find : ')
    console.log(documentManager.deleteDocumentById(id));
}

function display() {
    console.log('------Hi???n th??? s???n ph???m----------')
    console.log(documentManager.findAll());
}

function displayBook() {

    console.log(documentManager.searchDocumentByType(Book));
}

function displayMagazine() {
    console.log(documentManager.searchDocumentByType(Magazine));
}

function displayNewspaper() {
    console.log(documentManager.searchDocumentByType(Newspaper));
}

function main() {
    let menu = `---------Menu ch??nh-----------
    1.Th??m m???i t??i li???u
    2.X??a theo m??
    3.Hi???n th??? t???t c??? th??ng tin
    4.Hi???n th??? t???t c??? S??ch
    5.Hi???n th??? t???t c??? T???p ch??
    6.Hi???n th??? t???t c??? B??o
    0.Tho??t ch????ng tr??nh`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                deleteDocumentById();
                break;
            case 3:
                display();
                break;
            case 4:
                displayBook();
                break;
            case 5:
                displayMagazine();
                break;

            case 6:
                displayNewspaper();
                break;


        }
    } while (choice !== 0);
}

main();


