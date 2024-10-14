"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalThatEats = /** @class */ (function () {
    function AnimalThatEats() {
    }
    AnimalThatEats.prototype.consumeFood = function (food) {
        console.log("Eating ".concat(food));
    };
    AnimalThatEats.prototype.eat = function (food) {
        this.consumeFood(food);
    };
    AnimalThatEats.prototype.printBread = function () {
        console.log(this.bread);
    };
    return AnimalThatEats;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        return "meow";
    };
    Cat.prototype.setBread = function (bread) {
        this.bread = bread;
    };
    return Cat;
}(AnimalThatEats));
var c = new Cat();
c.eat("fish");
c.setBread("cat bread");
c.printBread();
function getAnimalDetails(animal) {
    console.log(animal.isAlive());
}
getAnimalDetails({
    isAlive: function () {
        return true;
    },
    getFurOrHairColor: function () {
        return "brown";
    },
    getScaleColor: function () {
        return "pink";
    },
    getSkinColor: function () {
        return "pink";
    }
});
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.isAlive = function () {
        return true;
    };
    Dog.prototype.getFurOrHairColor = function () {
        return "brown";
    };
    Dog.prototype.getScaleColor = function () {
        return "pink";
    };
    Dog.prototype.getSkinColor = function () {
        return "Black";
    };
    return Dog;
}());
var dog = new Dog();
console.log(dog.isAlive());
console.log(dog.getFurOrHairColor());
console.log(dog.getScaleColor());
// @noImplicitAny: false
function consumeFood(arg) { }
/// ---cut---
var LivingOrganism = /** @class */ (function () {
    function LivingOrganism() {
    }
    LivingOrganism.prototype.isAlive = function () {
        return true;
    };
    return LivingOrganism;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog2.prototype.bark = function () {
        return "woof";
    };
    Dog2.prototype.eat = function (food) {
        consumeFood(food);
    };
    return Dog2;
}(LivingOrganism));
