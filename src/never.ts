
//? Modification can be done in the return type of the function
// function Hello() : never {
//     while(1) {}
// }

// ? why you should not do this ?
// let comparable : string & number = 10 as (number & string);

// ? never type is used when you are sure that the function will never return anything 
// ? or the function will never end

let randomAnyType : any;

let randomUnknownType : unknown;
randomUnknownType = 20;

randomAnyType = randomUnknownType
randomUnknownType = randomAnyType

if(randomAnyType >= 10) {
    console.log(randomAnyType)
}
if(typeof randomUnknownType === "number" && randomUnknownType >= 10) {
    console.log(randomUnknownType)
}

const valueOne = randomUnknownType as number;
randomUnknownType
// let random : never;
// random = () => 10;

let acbd = { name : 'as', age : 10, firstName : 'as', lastName : '10'} as { name  : string, age : number };

const p1 = "Hello" as any as number;
console.log(p1)

let example : "Hello" = "hello" as "Hello";

function myFunc() : unknown {
    return { name : 'Rahul' }
}


function compare(a : string, b : string) : number {
    if(a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    } else {
        return 0;
    }

}   
;
