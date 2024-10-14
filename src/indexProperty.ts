type Form = {
    [key : string] : string
}

const form : Form = { userName : 'Rahul', password : 'password' }
const form2 : Form = { email : 'chhabra@mail.com', userPassword : 'password' }

// function overloading

function add(a : number, b : number) : number;
function add(a : string, b : string) : string;

function add(a : Combinable,b : Combinable ) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}
// error
//let ans = add(70,100);
// console.log((ans as string).split(' '))
let ans = add('Rahul','Chhabra');
console.log(ans.split(' '))



let valueof = undefined ?? `Hello`;
console.log(valueof)
valueof = null ?? `Hello`;
console.log(valueof)


type T00 = unknown & null; // null
type T11 = unknown;

let p: T11 = 10;
let q : number = 20;
// p = q; will work
// q = p; will not work



// TypeScript is a statically typed superset of JavaScript.
// It enhances JavaScript by adding type annotations.
// This feature allows developers to catch errors during the development phase, rather than at runtime.
// Improves overall code quality and maintainability.
// Empowers developers to build robust and scalable applications.
// What is the ‘Never’ Keyword ?
// The ‘Never’ keyword is a unique type in TypeScript that represents a value that never occurs. This can be quite powerful, especially when defining functions that throw errors or never return a value.

