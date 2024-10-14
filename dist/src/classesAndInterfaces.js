"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var source_1 = require("./source");
var ITDepartment = /** @class */ (function () {
    function ITDepartment() {
        this.employees = [];
    }
    ITDepartment.prototype.contructor = function (name, employees) {
        this.name = name;
        this.employees = employees;
    };
    ITDepartment.prototype.describe = function () {
        console.log("IT Department Name ".concat(this.name));
    };
    ITDepartment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return ITDepartment;
}());
var Name = /** @class */ (function () {
    function Name() {
        this.name = 'Max';
        this.outputName = 'Manu';
        this.outputFunction = source_1.add;
    }
    Name.prototype.outputFunction2 = function () {
        return this.name;
    };
    return Name;
}());
// console.log("Hello");
console.log("Hello");
// const dept = new ITDepartment('IT', ['Max']) 
