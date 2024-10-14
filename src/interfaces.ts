import { Animal,Mammal,Reptile } from './types';

class AnimalThatEats {
    bread:string
    consumeFood(food : string) {
        console.log(`Eating ${food}`)
    }
    eat(food : string) {
        this.consumeFood(food)
    }
    printBread() {
        console.log(this.bread)
    }
}
class Cat extends AnimalThatEats {
    meow() {
        return "meow"
    }
    setBread(bread : string) {  
        this.bread = bread
    }
}
const c = new Cat()
c.eat("fish")
c.setBread("cat bread")
c.printBread()


function getAnimalDetails(animal: Reptile) {
    console.log(animal.isAlive())
}
getAnimalDetails({
    isAlive:function() {
        return true
    },
    getFurOrHairColor:function() {
        return "brown"
    },
    getScaleColor:function() {
        return "pink"
    },
    getSkinColor:function() {
        return "pink"
    }
})

class Dog implements Animal, Mammal, Reptile {
    isAlive(): boolean {
        return true
    }
    getFurOrHairColor(): string {
        return "brown"
    }
    getScaleColor(): string {
        return "pink"
    }
    getSkinColor(): string {
        return "Black"
    }
}

const dog = new Dog()
console.log(dog.isAlive())
console.log(dog.getFurOrHairColor())
console.log(dog.getScaleColor())



// @noImplicitAny: false
function consumeFood(arg:string) {}
/// ---cut---
class LivingOrganism {
  isAlive() {
    return true
  }
}
interface AnimalLike {
  eat(food:string): void
}
interface CanBark {
  bark(): string
}

class Dog2
  extends LivingOrganism
  implements AnimalLike, CanBark
{
  bark() {
    return "woof"
  }
  eat(food:string) {
    consumeFood(food)
  }
}