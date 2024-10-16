// Type Alias is a way to give a type a name

type Group = {
    name : string,
    hostel : string,
    participatingMembers : number
    leaderOfTheGroup : string
}
const groupOne : Group = {
    name : 'Losers',
    hostel:'H4',
    participatingMembers : 20,
    leaderOfTheGroup : 'Derrick'
}

// Alising a function type
type ArithmeticMatch = (a:number,b:number) => number
type userID = number;

type CombinationOfBothArithmeticMatchAndUserID = ArithmeticMatch & userID;

const dummyFunction : ArithmeticMatch = (a,b) => a + b;


type BaseUser = {
    userId : number,
    name : string,
    email : string
}

type AdminUser = BaseUser & { role : string }
/** type AdminUser = { userId : string, name : string, email  :string, role : string }  */

interface BaseUserInterface {
    userId : number,
    name : string,
    email : string
}

interface AdminUserInterface extends BaseUserInterface {
    role  :string
}

const adminUserOne : AdminUser = {
    userId : 1,
    name : 'Rahul',
    email : 'rahul@mail.com',
    role : 'admin'
}

const adminUserTwo : AdminUserInterface = {
    userId : 2,
    name : 'Chhabra',
    email : 'CHHABRA@MAIL.COM',
    role : 'admin'
}

console.log(adminUserOne)
console.log(adminUserTwo)


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

const someRandomThing : Universal = 10;
const someRandomThingTwo : Universal = 1;

type Universal2 = Combinable | Numeric

const someRandomThingThree : Universal2 = true && 0;
console.log(someRandomThingThree)

type Combinable2 = { name : string } & { name : number };

let plu : never = 10 as any as never;
console.log(plu);
// never type
// let someRandomThingFour : Combinable2 = { name : 'Rahul' }

type Wheels = {
    wheelCount : 2 | 4 | 6 | 8
}
type Vehicle = {
    make : string,
    model : string,
    year : number
    fuelType : string
}

type Caar = Vehicle & Wheels;

let maruti : Caar = { make : 'Maruti', model : 'Swift', year : 2021, fuelType : 'Petrol', wheelCount : 4 };


type Horse = {
    type : 'horse'
    runningSpeed : number,
}

type Bird  = {
    type:'bird',
    flyingSpeed : number,
}


// function animal( animal : Horse | Bird) {
//  // descriminated union
//  let speed : string;
//  if ("runningSpeed" in animal) {
//     speed = `Horse running speed is ${animal.runningSpeed}` + " km/hr"
//  } else {
//     speed =  `Bird flying speed is ${animal.flyingSpeed}` + " km/hr"
//  }  
//     console.log(speed)
// }

function animal( animal : Horse | Bird)  : { speed : string } | null{
    // descriminated union
    let speed : string;
    switch(animal.type) {
        case 'horse':
            speed = `Horse running speed is ${animal.runningSpeed}` + " km/hr"
            break;
        case 'bird':
            speed = `Bird flying speed is ${animal.flyingSpeed}` + " km/hr"
            break
    } 
    console.log(speed)   
    return null;
}

// const animalOne : Horse & Bird = { type : 'horse', runningSpeed : 200 } ;
const animalTwo = { age : 10 } as (Bird & Horse);
/**
 Here, the object is being cast to both the Bird and Horse types using the as keyword. The issue arises because the type property is set to 'bird', but the Horse type expects type: 'horse'. This creates a conflict since TypeScript expects the type to match both 'bird' and 'horse' at the same time, which is not possible.

Why You Don't Need to Use as:
Type Safety: Using the as keyword tells TypeScript to "force" the type of animalTwo as both Bird & Horse, bypassing the type checking that would normally prevent such an assignment. This undermines the benefit of TypeScript's type safety because the as keyword allows you to lie about the actual type, which may lead to runtime errors.

Correct Approach:

You should either use a union type (Bird | Horse) or ensure the properties match the expected structure for both Bird and Horse. A better way would be to define an object that properly satisfies both types.

 */
const animalOne : Horse = { type : 'horse', runningSpeed : 200 } ;
let result = animal(animalOne)!
console.log(result.speed)
