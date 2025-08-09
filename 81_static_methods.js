// Static methods
// Static methods are used to implement functions that belong to a Class as a whole and not to any particular object
// Static methods arent available for individual objects
// NOTE : Static methods cant be accessed with 'this' keyword instead with className.staticMethod

class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name);
    }

    walk() {
        console.log("Animal " + this.name + " is walking");
    }

    static capitalize(name) { // this a static method of Animal class
        return name.charAt(0).toUpperCase() + name.substr(1);
    }
};

// let j = new Animal("Jack"); // Jack passed as J capital
// j.walk();

let j = new Animal("jack"); // what if someone passed jack that is Jack's j should be capital
// we use static methods for this solution
j.walk();

console.log(j.capitalize("thisa")); // this doesnt work