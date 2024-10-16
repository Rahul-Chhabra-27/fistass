// Intent of the developer is two numbers are added and the result is returned.
const addTwoNumbers = function(number1 : number, number2 : number) : number {
    return number1 + number2;   
}

function divideNumbers(number1 : number, number2 : number) : (number | string | boolean) {
    if(number2 === 0) {
        return "cannot divide by zero";
    }
    return number1 / number2;   
}
console.log(divideNumbers(10,5));
console.log(addTwoNumbers(1,2)); 

let hello = 100;

let someRandomNumber:"hello";
let x = 10 as 20
let y = 11 as 20
let z = 40 as 20
let someString = "some random thing" as  "hello"

someRandomNumber = someString;

let types : (number | string) = 10;
console.log(types)

types = "hello";
console.log(types)

const realAppleJuice = "RealAppleJuice" as "applejuice";
function appleJuice(indredients : string) : "applejuice" {
    // const juice = making the juice.
    return realAppleJuice;
}

const juices : [string , number, string?][] = [["applejuice", 10,"Real"], ["orangejuice", 20]];
const objectsJuices : { type:string, prices:number, make?:string } [] = [
    {type:"applejuice", prices:10, make:"Real"},
    {type:"orangejuice", prices:20}
];

const tuples: [number, any , number] = [1,{name:"hello"},2];


const evens = [2,4,6,8,10];
const oneThroughFive = [1,2,3,4,5];

const value: number[] = [2,4,6,8,10];

type oneThroughFiveEx2 = 1 | 2 | 3 | 4 | 5;
type evensEx2 = 2 | 4 | 6 | 8 | 10;

let unionNumber : (oneThroughFiveEx2 | evensEx2) = 10;
let intersectionNumber : (oneThroughFiveEx2 & evensEx2) = 2;
intersectionNumber = 4;

type juicesAvailable = "applejuice" | "orangejuice" | "grapejuice" | "mangojuice";
type juiceCompanyAvailable = "Real" | "Tropicana" | "MinuteMaid";


type juiceType = [juicesAvailable, number, juiceCompanyAvailable?];

const Juices : juiceType[] = [["grapejuice",200],["applejuice", 10,"Real"], ["orangejuice", 20,"Tropicana"]
, ["mangojuice",100,"Tropicana"]];

const success = ["success",{name:"Rahul Chhabra", age:23}] as const
const failure = ["failure", new Error("Something went wrong")] as const;

function tossingACoin() : (typeof success | typeof failure) {
    return Math.random() < 0.5 ? success : failure;
}

const [first,second] = tossingACoin();

if (second instanceof Error) {
    first
    second
} else {
    first
    second
}

if (first === "success") {
    first
    second
}
else {
    first
    second
}


type Car = {
    make : string,
    model : string,
    year : number
    fuelType : string
}

type Truck = {
    make : string,
    model : string,
    year : number,
    towingCapacity : number
};

type TestingMessage = "Testing Passed" | "Engine Testing Failed" | "Types Testing Failed" | "Fuel Testing Failed";

function engineTesting(car:Car) : boolean {
    return car.fuelType === "electric";
}
function typesTesting(car:Car) : boolean {
    return car.model === "truck";
}
function fuelTesting(car:Car) : boolean {
    return car.fuelType === "gas";
}

type TestingTemplate = {
    engineTesting:(car:Car) => boolean,
    typesTesting:(car:Car) => boolean,
    fuelTesting:(car:Car) => boolean
}
function carsTesting (car:Car, testingKit: TestingTemplate) : TestingMessage {
    // engine testing
    if (!testingKit.engineTesting(car)) {
        return "Engine Testing Failed";
    }
    // tyres testing
    if (testingKit.typesTesting(car)) {
        return "Types Testing Failed";
    }
     // fuel testing
    if (testingKit.fuelTesting(car)) {
        return "Fuel Testing Failed";
    }
    return "Testing Passed";
}
console.log(carsTesting({make:"Toyota", model:"truck", year:2021, fuelType:"electric"}, {engineTesting, typesTesting, fuelTesting}));



const pl = "Hello" as any as number;