// Getters and Setters

class Animal {
    constructor(name) {
        this._name = name;
    }

    fly() {
        console.log("Mai ud raha hu");
    }

    get name() { // getter function
        return this._name;
    }

    set name(newName) { // setter function
        this._name = newName;
    }
};

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    fly() {
        super.fly();
    }
};

let a = new Animal("Bruno");
a.fly();
console.log(a.name); // property object jaise hogaya -> getting the name
a.name = "Jack"; // property object jaise hogaya -> setting the name
console.log(a.name); // property object jaise hogaya -> getting the name
let c = 56;

// instanceof operator -> used to check if an object belongs to a class or not or any any other class inheriting from it
console.log(a instanceof Animal);
console.log(c instanceof Animal);

let d = new Dog("Labo");
console.log(d.name);
d.name = "Dogo";
console.log(d.name);
console.log(d instanceof Animal); // true
console.log(d instanceof Dog);
console.log(c instanceof Dog);