import { Empployee } from "./employee";

export class EmployeeManeger {
    static add(hieu: Empployee) {
        throw new Error("Method not implemented.");
    }
    static listEmployee: Empployee[] = []

    static addEmployee(employee: Empployee): void{
        EmployeeManeger.listEmployee.push(employee);
}
    static display(): void{ {
        for (const employee of EmployeeManeger.listEmployee){
            console.log(employee);
        }
    }
}

    static deleteEmployee( id: number): void {
        for (let i = 0; i < EmployeeManeger.listEmployee.length; i++){
            if (EmployeeManeger.listEmployee[i].id === id){
                EmployeeManeger.listEmployee.splice(i, 1);
            } 
        }
        this.display()
}
    static editEmployee(id: number, empyeeEdit: Empployee): void{
        for (let i = 0; i < EmployeeManeger.listEmployee.length; i++){
            if (EmployeeManeger.listEmployee[i].id === id){
                EmployeeManeger.listEmployee[i] = empyeeEdit;
          }
        }
    }
}
