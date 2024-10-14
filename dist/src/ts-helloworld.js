// Intent of the developer is two numbers are added and the result is returned.
var addTwoNumbers = function (number1, number2) {
    return number1 + number2;
};
function divideNumbers(number1, number2) {
    if (number2 === 0) {
        return "cannot divide by zero";
    }
    return number1 / number2;
}
console.log(divideNumbers(10, 5));
console.log(addTwoNumbers(1, 2));
var hello = 100;
var someRandomNumber;
var x = 10;
var y = 11;
var z = 40;
var someString = "some random thing";
someRandomNumber = someString;
var types = 10;
console.log(types);
types = "hello";
console.log(types);
var realAppleJuice = "RealAppleJuice";
function appleJuice(indredients) {
    // const juice = making the juice.
    return realAppleJuice;
}
var juices = [["applejuice", 10, "Real"], ["orangejuice", 20]];
var objectsJuices = [
    { type: "applejuice", prices: 10, make: "Real" },
    { type: "orangejuice", prices: 20 }
];
var tuples = [1, { name: "hello" }, 2];
var evens = [2, 4, 6, 8, 10];
var oneThroughFive = [1, 2, 3, 4, 5];
var value = [2, 4, 6, 8, 10];
var unionNumber = 10;
var intersectionNumber = 2;
intersectionNumber = 4;
var Juices = [["grapejuice", 200], ["applejuice", 10, "Real"], ["orangejuice", 20, "Tropicana"],
    ["mangojuice", 100, "Tropicana"]];
var success = ["success", { name: "Rahul Chhabra", age: 23 }];
var failure = ["failure", new Error("Something went wrong")];
function tossingACoin() {
    return Math.random() < 0.5 ? success : failure;
}
var _a = tossingACoin(), first = _a[0], second = _a[1];
if (second instanceof Error) {
    first;
    second;
}
else {
    first;
    second;
}
if (first === "success") {
    first;
    second;
}
else {
    first;
    second;
}
function engineTesting(car) {
    return car.fuelType === "electric";
}
function typesTesting(car) {
    return car.model === "truck";
}
function fuelTesting(car) {
    return car.fuelType === "gas";
}
function carsTesting(car, testingKit) {
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
console.log(carsTesting({ make: "Toyota", model: "truck", year: 2021, fuelType: "electric" }, { engineTesting: engineTesting, typesTesting: typesTesting, fuelTesting: fuelTesting }));
