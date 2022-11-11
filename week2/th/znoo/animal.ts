export abstract class Animal{
    abstract makeSound()
}

export class Tiger extends Animal {
    makeSound():string {
        return "Tiger: roarr"
    }
}

export class Chicken extends Animal {
    makeSound():string {
        return "Chicken: cluck-cluck"
    }
}

let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound())
})

