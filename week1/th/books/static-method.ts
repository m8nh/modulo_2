class Instructor1{
    [x: string]: any;
name:string;
role:string

    constructor({ name ='', role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }

    // Instance method
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

    // Base case static method
    static helloWorld() {
        console.log('Hi there');
    }

    // Static method
    static canTeach(instructor: Instructor1) {
        return (instructor.role === 'classroom');
    }

}

let juniorInstructor = new Instructor1({ 'name' : 'Brian' });
let seniorInstructor = new Instructor1({ 'name' : 'Alice', "role" : "classroom" });

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

Instructor1.helloWorld(); // "Hi there"

// "Brian can teach: false"
console.log(
    `${juniorInstructor.namcleare} can teach: ${Instructor1.canTeach(juniorInstructor)}`
);

// "Alice can teach: true"
console.log(
    `${seniorInstructor.name} can teach: ${Instructor1.canTeach(seniorInstructor)}`
);
