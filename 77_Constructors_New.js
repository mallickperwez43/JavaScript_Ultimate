class RailwayForm {

    constructor(givenName, trainNo, address) {
        console.log(`Constructor Called for ${givenName} for Train no : ${trainNo}`);
        this.name = givenName;
        this.trainNumber = trainNo;
        this.address = address;
    }

    preview() {
        alert(`${this.name}'s Form is for Train No : ${this.trainNumber} and address is ${this.address}`);
    }

    submit() {
        alert(`${this.name}'s Form Submited for Train No : ${this.trainNumber}`);
    }

    cancel() {
        alert(`${this.name}'s Form is Cancelled for Train No : ${this.trainNumber}`);
        this.trainNumber = 0;
    }

};

let harryForm = new RailwayForm("Harry", 13488, "420, Royal Building, Gandhi Road, Mumbai - 400031");
harryForm.preview();
harryForm.submit();
harryForm.cancel();
harryForm.preview();
