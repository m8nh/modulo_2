import { EmployeeManeger } from "./emaneger"
import { Empployee } from "./employee"

let hieu = new Empployee(1, 'Pham', 'Hieu', '2004', 'Berlin', 'Lau don');
let nam = new Empployee(4, 'Nguyen', 'Nam', '1991', 'Canh Berlin', 'Lau don 2');

EmployeeManeger.add(hieu);
EmployeeManeger.add(nam);
EmployeeManeger.display();

let dai: Empployee = new Empployee(3, 'Le', 'Đại', '2007', 'Đông Anh', 'Tutor C10');
EmployeeManeger.editEmployee(4, dai);
console.log('-----Sau khi thay----');
EmployeeManeger.display();