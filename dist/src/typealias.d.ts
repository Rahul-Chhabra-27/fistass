type Group = {
    name: string;
    hostel: string;
    participatingMembers: number;
    leaderOfTheGroup: string;
};
declare const groupOne: Group;
type ArithmeticMatch = (a: number, b: number) => number;
type userID = number;
type CombinationOfBothArithmeticMatchAndUserID = ArithmeticMatch & userID;
declare const dummyFunction: ArithmeticMatch;
type BaseUser = {
    userId: number;
    name: string;
    email: string;
};
type AdminUser = BaseUser & {
    role: string;
};
/** type AdminUser = { userId : string, name : string, email  :string, role : string }  */
interface BaseUserInterface {
    userId: number;
    name: string;
    email: string;
}
interface AdminUserInterface extends BaseUserInterface {
    role: string;
}
declare const adminUserOne: AdminUser;
declare const adminUserTwo: AdminUserInterface;
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
declare const someRandomThing: Universal;
declare const someRandomThingTwo: Universal;
type Universal2 = Combinable | Numeric;
declare const someRandomThingThree: Universal2;
type Combinable2 = {
    name: string;
} & {
    name: number;
};
type Wheels = {
    wheelCount: 2 | 4 | 6 | 8;
};
type Vehicle = {
    make: string;
    model: string;
    year: number;
    fuelType: string;
};
type Caar = Vehicle & Wheels;
declare let maruti: Caar;
type Horse = {
    type: 'horse';
    runningSpeed: number;
};
type Bird = {
    type: 'bird';
    flyingSpeed: number;
};
declare function animal(animal: Horse | Bird): {
    speed: string;
} | null;
declare const animalTwo: (Bird & Horse);
/**
 Here, the object is being cast to both the Bird and Horse types using the as keyword. The issue arises because the type property is set to 'bird', but the Horse type expects type: 'horse'. This creates a conflict since TypeScript expects the type to match both 'bird' and 'horse' at the same time, which is not possible.

Why You Don't Need to Use as:
Type Safety: Using the as keyword tells TypeScript to "force" the type of animalTwo as both Bird & Horse, bypassing the type checking that would normally prevent such an assignment. This undermines the benefit of TypeScript's type safety because the as keyword allows you to lie about the actual type, which may lead to runtime errors.

Correct Approach:

You should either use a union type (Bird | Horse) or ensure the properties match the expected structure for both Bird and Horse. A better way would be to define an object that properly satisfies both types.

 */
declare const animalOne: Horse;
declare let result: {
    speed: string;
};
