// Inheritance
// Class Inheritance is a way for one class to extend another class. This is done by using 'extends' keyword


// Parent Class
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(`${this.name} is Running!`);
    }

    shout() {
        console.log(`${this.name} is Shouting!`);
    }
};


// Child Class -> using 'extends' keyword
class Monkey extends Animal {
    eatBanana() {
        console.log(`${this.name} is Eating Banana!`);
    }
    hide() {
        console.log(`${this.name} is Hiding!`);
    }
};

let ani = new Animal("Bruno", "White");
ani.run();
ani.shout();

let mon = new Monkey("Chimpu", "Orange");
mon.run();
mon.shout();
mon.eatBanana();
mon.hide();