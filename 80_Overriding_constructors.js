// Overriding in Constructors of child class

// Parent Class
class Employee {
    constructor(name) {
        this.name = name;
        console.log(`${this.name} - Empolyee's constructor is here`);
    }

    login() {
        console.log(`${this.name} has logged in`);
    }

    logout() {
        console.log(`${this.name} has logged out`);
    }

    requestLeaves(leaves) {
        console.log(`Empolyee ${this.name} has requested ${leaves} leaves - Auto approved`);
    }
};

// Child Class - Inheritance
class Programmer extends Employee {
    // constructor(....args) { ---> If there is no constructor in the child class, this is created automatically
    //     super(...args);
    // }

    // NOTE : Constructors in inhertiting classes must call super(...args) and do it before using 'this'

    constructor(name) {
        super(name);
        console.log(`This is a newly written constructor for ${name}`)
    }

    requestCoffee(x) {
        console.log(`Empolyee ${this.name} has requested ${x} coffees`);
    }

    requestLeaves(leaves) { // method overriding
        // console.log(`Empolyee ${this.name} has requested ${leaves + 1} leaves (one Extra)`);
        super.requestLeaves(leaves + 1); // super - a keyword used within class definitions to access and call functions and properties of a parent class
        console.log("One Extra is granted");
    }
};

let e = new Employee("Harry");
e.login();
e.requestLeaves(3);


let e2 = new Programmer("Harry");
e2.login();
e2.requestLeaves(3);
e2.requestCoffee(6);