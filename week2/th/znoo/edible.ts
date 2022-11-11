
export interface Edible
{
    howToEat(): string;
}

import { Animal } from "./animal";

export class Chicken extends Animal implements Edible {
    makeSound(): string {
        return "Chcken: cluck-cluck!";
    }

    howToEat(): string {
        return "Could be friend"
    }
}

let animals =[]

animals[0] = new Tiger()
animals[1] = new Chicken()

animals.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken){
        console.log(item.howToEat())
    }
})