"use strict";
//? Modification can be done in the return type of the function
// function Hello() : never {
//     while(1) {}
// }
// ? why you should not do this ?
// let comparable : string & number = 10 as (number & string);
// ? never type is used when you are sure that the function will never return anything 
// ? or the function will never end
var randomAnyType;
var randomUnknownType;
randomUnknownType = 20;
randomAnyType = randomUnknownType;
randomUnknownType = randomAnyType;
if (randomAnyType >= 10) {
    console.log(randomAnyType);
}
if (typeof randomUnknownType === "number" && randomUnknownType >= 10) {
    console.log(randomUnknownType);
}
var valueOne = randomUnknownType;
randomUnknownType;
// let random : never;
// random = () => 10;
var acbd = { name: 'as', age: 10, firstName: 'as', lastName: '10' };
var p1 = "Hello";
console.log(p1);
var example = "hello";
function myFunc() {
    return { name: 'Rahul' };
}
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
;
