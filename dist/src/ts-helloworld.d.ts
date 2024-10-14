declare const addTwoNumbers: (number1: number, number2: number) => number;
declare function divideNumbers(number1: number, number2: number): (number | string | boolean);
declare let hello: number;
declare let someRandomNumber: "hello";
declare let x: 20;
declare let y: 20;
declare let z: 20;
declare let someString: "hello";
declare let types: (number | string);
declare const realAppleJuice: "applejuice";
declare function appleJuice(indredients: string): "applejuice";
declare const juices: [string, number, string?][];
declare const objectsJuices: {
    type: string;
    prices: number;
    make?: string;
}[];
declare const tuples: [number, any, number];
declare const evens: number[];
declare const oneThroughFive: number[];
declare const value: number[];
type oneThroughFiveEx2 = 1 | 2 | 3 | 4 | 5;
type evensEx2 = 2 | 4 | 6 | 8 | 10;
declare let unionNumber: (oneThroughFiveEx2 | evensEx2);
declare let intersectionNumber: (oneThroughFiveEx2 & evensEx2);
type juicesAvailable = "applejuice" | "orangejuice" | "grapejuice" | "mangojuice";
type juiceCompanyAvailable = "Real" | "Tropicana" | "MinuteMaid";
type juiceType = [juicesAvailable, number, juiceCompanyAvailable?];
declare const Juices: juiceType[];
declare const success: readonly ["success", {
    readonly name: "Rahul Chhabra";
    readonly age: 23;
}];
declare const failure: readonly ["failure", Error];
declare function tossingACoin(): (typeof success | typeof failure);
declare const first: "success" | "failure", second: {
    readonly name: "Rahul Chhabra";
    readonly age: 23;
} | Error;
type Car = {
    make: string;
    model: string;
    year: number;
    fuelType: string;
};
type Truck = {
    make: string;
    model: string;
    year: number;
    towingCapacity: number;
};
type TestingMessage = "Testing Passed" | "Engine Testing Failed" | "Types Testing Failed" | "Fuel Testing Failed";
declare function engineTesting(car: Car): boolean;
declare function typesTesting(car: Car): boolean;
declare function fuelTesting(car: Car): boolean;
type TestingTemplate = {
    engineTesting: (car: Car) => boolean;
    typesTesting: (car: Car) => boolean;
    fuelTesting: (car: Car) => boolean;
};
declare function carsTesting(car: Car, testingKit: TestingTemplate): TestingMessage;
