"use strict";
// Type Alias is a way to give a type a name
var groupOne = {
    name: 'Losers',
    hostel: 'H4',
    participatingMembers: 20,
    leaderOfTheGroup: 'Derrick'
};
var dummyFunction = function (a, b) { return a + b; };
var adminUserOne = {
    userId: 1,
    name: 'Rahul',
    email: 'rahul@mail.com',
    role: 'admin'
};
var adminUserTwo = {
    userId: 2,
    name: 'Chhabra',
    email: 'CHHABRA@MAIL.COM',
    role: 'admin'
};
console.log(adminUserOne);
console.log(adminUserTwo);
var someRandomThing = 10;
var someRandomThingTwo = 1;
var someRandomThingThree = true && 0;
console.log(someRandomThingThree);
var maruti = { make: 'Maruti', model: 'Swift', year: 2021, fuelType: 'Petrol', wheelCount: 4 };
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
function animal(animal) {
    // descriminated union
    var speed;
    switch (animal.type) {
        case 'horse':
            speed = "Horse running speed is ".concat(animal.runningSpeed) + " km/hr";
            break;
        case 'bird':
            speed = "Bird flying speed is ".concat(animal.flyingSpeed) + " km/hr";
            break;
    }
    console.log(speed);
    return null;
}
// const animalOne : Horse & Bird = { type : 'horse', runningSpeed : 200 } ;
var animalTwo = { age: 10 };
/**
 Here, the object is being cast to both the Bird and Horse types using the as keyword. The issue arises because the type property is set to 'bird', but the Horse type expects type: 'horse'. This creates a conflict since TypeScript expects the type to match both 'bird' and 'horse' at the same time, which is not possible.

Why You Don't Need to Use as:
Type Safety: Using the as keyword tells TypeScript to "force" the type of animalTwo as both Bird & Horse, bypassing the type checking that would normally prevent such an assignment. This undermines the benefit of TypeScript's type safety because the as keyword allows you to lie about the actual type, which may lead to runtime errors.

Correct Approach:

You should either use a union type (Bird | Horse) or ensure the properties match the expected structure for both Bird and Horse. A better way would be to define an object that properly satisfies both types.

 */
var animalOne = { type: 'horse', runningSpeed: 200 };
var result = animal(animalOne);
console.log(result.speed);
