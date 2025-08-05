// This is just for explanation from the previous lecture with the use of construtor

class RailwayForm {

    constructor(givenName, trainNo) {
        console.log(`Constructor Called for ${givenName} for Train no : ${trainNo}`);
        this.name = givenName;
        this.trainNumber = trainNo;
    }

    // fill(givenName, trainNo) {
    //     this.name = givenName;
    //     this.trainNumber = trainNo;
    // }

    submit() {
        alert(`${this.name}'s Form Submited for Train No : ${this.trainNumber}`);
    }

    cancel() {
        alert(`${this.name}'s Form is Cancelled for Train No : ${this.trainNumber}`)
    }

};

let harryForm = new RailwayForm("Harry", 12478); // object 1
// harryForm.fill("Harry", 12478);
harryForm.submit();

let rohanForm1 = new RailwayForm("Rohan", 15420); // object 2
let rohanForm2 = new RailwayForm("Rohan", 19211); // object 3
// rohanForm1.fill("Rohan", 15420);
// rohanForm2.fill("Rohan", 19211);
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();