class Instructor {
    constructor({name, role = "assistant"} = {}) {
    this.name = name;
    this.role = role;
    }

// Instance method 
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

// base case static method
    static helloWold() {
      console.log("helloWold");
    }

    //static method
    static canTeach(instructor) {
        return instructor.role === "classroom";
    }
}

let juniorInstructor = new Instructor({'name': 'Junior Instructor'});;
let seniorInstructor = new Instructor({'name': 'Student Instructor', "role" : "classroom"});

juniorInstructor.renderDetails();
seniorInstructor.renderDetails();

console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`);
