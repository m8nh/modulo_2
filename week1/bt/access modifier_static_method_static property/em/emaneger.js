"use strict";
exports.__esModule = true;
exports.EmployeeManeger = void 0;
var EmployeeManeger = /** @class */ (function () {
    function EmployeeManeger() {
    }
    EmployeeManeger.add = function (hieu) {
        throw new Error("Method not implemented.");
    };
    EmployeeManeger.addEmployee = function (employee) {
        EmployeeManeger.listEmployee.push(employee);
    };
    EmployeeManeger.display = function () {
        {
            for (var _i = 0, _a = EmployeeManeger.listEmployee; _i < _a.length; _i++) {
                var employee = _a[_i];
                console.log(employee);
            }
        }
    };
    EmployeeManeger.deleteEmployee = function (_a) {
        var id = _a.id;
        for (var i = 0; i < EmployeeManeger.listEmployee.length; i++) {
            if (EmployeeManeger.listEmployee[i].id === id) {
                EmployeeManeger.listEmployee.splice(i, 1);
            }
        }
    };
    EmployeeManeger.editEmployee = function (id, empyeeEdit) {
        for (var i = 0; i < EmployeeManeger.listEmployee.length; i++) {
            if (EmployeeManeger.listEmployee[i].id === id) {
                EmployeeManeger.listEmployee[i] = empyeeEdit;
            }
        }
    };
    EmployeeManeger.listEmployee = [];
    return EmployeeManeger;
}());
exports.EmployeeManeger = EmployeeManeger;
