import { add } from './source'

/**

abstract class Department {
    protected readonly id : string;
    private name:string = 'DEAFULT'
    protected employees : string[] = []

    constructor(name:string, id : string) {
        this.id = id
        this.name = name;
        this.employees = []
    }
    add : (a:number,b:number) => number = add
    describe(this:Department) {
        console.log(`Department: ${this.name}`)
    }
    addEmployee(employees:string) {
        this.employees.push(employees)
    }
    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
    abstract locationOfTheDepartment() : void 
}


class ITDepartment extends Department {
    constructor(id:string, private admins : string[]) {
        super('IT', id)
    }
    addEmployee(name:string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }
    describe() {
        console.log('IT Department - ID: ' + this.id)
    }
    locationOfTheDepartment() {
        console.log('IT Department is located in the 3rd floor')
    }
}
// const dept = new Department('IT', 'd1')
// dept.addEmployee('Max')
// dept.addEmployee('Manu')
// dept.printEmployeeInformation()
// console.log(dept instanceof Department)
// console.log(typeof dept)

// const AccountingCopy = {name : 'Hell', describe : dept.describe}


let dept = new ITDepartment('d1', ['Max'])
dept.describe()

**/



interface Department {
    name : string,
    employees : string[],
    describe(this:Department):void,
    addEmployee(employee:string):void
}


class ITDepartment implements Department {
    name:string;
    employees:string[] = []
    contructor(name : string,employees : string[]) {
        this.name = name
        this.employees = employees
    }
    describe(this: Department): void {
        console.log(`IT Department Name ${this.name}`)
    }
    addEmployee(employee: string): void {
        this.employees.push(employee)
    }
}


interface AddFn {
    (a:number,b:number) : number
}

interface Named {
    name : string,
    outputFunction2 : () => void,
    outputName? : string // optional property..
}

class Name implements Named {
    name : string = 'Max'
    outputName : string = 'Manu'
    outputFunction? : (a:number,b:number) => number = add
    outputFunction2() {
        return this.name
    }
}

// console.log("Hello");
console.log("Hello")


// const dept = new ITDepartment('IT', ['Max']) 