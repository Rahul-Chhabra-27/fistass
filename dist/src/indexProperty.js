var form = { userName: 'Rahul', password: 'password' };
var form2 = { email: 'chhabra@mail.com', userPassword: 'password' };
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// error
//let ans = add(70,100);
// console.log((ans as string).split(' '))
var ans = add('Rahul', 'Chhabra');
console.log(ans.split(' '));
var valueof = undefined !== null && undefined !== void 0 ? undefined : "Hello";
console.log(valueof);
valueof = null !== null && null !== void 0 ? null : "Hello";
console.log(valueof);
var p = 10;
var q = 20;
// p = q; will work
// q = p; will not work
// TypeScript is a statically typed superset of JavaScript.
// It enhances JavaScript by adding type annotations.
// This feature allows developers to catch errors during the development phase, rather than at runtime.
// Improves overall code quality and maintainability.
// Empowers developers to build robust and scalable applications.
// What is the ‘Never’ Keyword ?
// The ‘Never’ keyword is a unique type in TypeScript that represents a value that never occurs. This can be quite powerful, especially when defining functions that throw errors or never return a value.
