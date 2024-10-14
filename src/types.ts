export interface Animal {
    isAlive() : boolean
}

export interface Mammal extends Animal {
    getFurOrHairColor(): string
}

export interface Reptile extends Mammal {
    getScaleColor(): string
}


export interface Mammal {
    getSkinColor(): string
}
