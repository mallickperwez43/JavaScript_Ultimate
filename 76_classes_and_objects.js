// Classes and Objects
// In OOPs, classes are extensible program-code template for creating objects, providing initial values for state(member variable)
// and implementation of behaviour (member functions)

/* class MyClass {
    
   // class methods
   constructor() {...}
   method1 () {...}
   method2 () {...}
} */
// We can now use MyClass to create a new objects with all the listed methods

class RailwayForm {

    fill(givenName, trainNo) {
        this.name = givenName;
        this.trainNumber = trainNo;
    }

    submit() {
        alert(`${this.name}'s Form Submited for Train No : ${this.trainNumber}`);
    }

    cancel() {
        alert(`${this.name}'s Form is Cancelled for Train No : ${this.trainNumber}`)
    }

};

let harryForm = new RailwayForm(); // object 1
harryForm.fill("Harry", 12478);
harryForm.submit();

let rohanForm1 = new RailwayForm(); // object 2
let rohanForm2 = new RailwayForm(); // object 3
rohanForm1.fill("Rohan", 15420);
rohanForm2.fill("Rohan", 19211);
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();