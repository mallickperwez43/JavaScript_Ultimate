// Q1 : Create a JavaScript class to create a complex number.
//      Create a Constructor to set the real and the complex part
//      a + ib;

class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    static add(num1, num2) {
        const newReal = num1.real + num2.real;
        const newImaginary = num1.imaginary + num2.imaginary;

        return new Complex(newReal, newImaginary)
    }

    get real() {
        return this._real;
    }

    get imaginary() {
        return this._imaginary;
    }

    set real(newReal) {
        this._real = newReal;
    }

    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
};

let a = new Complex(2, 4);
let b = new Complex(6, 2);

// Q2 : Write a method to add two Complex numbers in the above class
let sum = Complex.add(a, b);
console.log(sum);
console.log(`The sum of the complex number is : ${sum.real} + i${sum.imaginary}`);

// Q3 : Creat a class Student from a class Human
//      Override a method and see changes

class Human {
    constructor(name, favFood) {
        this.name = name;
        this.favFood = favFood;
    }

    eating() {
        console.log(`Human ${this.name} is eating his favorite food that is ${this.favFood}`);
    }
};

class Student extends Human {
    constructor(name, favFood) {
        super(name, favFood);
    }

    eating() {
        console.log(`Student ${this.name} is eating his favorite food that is ${this.favFood}`);
    }
};

let student1 = new Student("Harry", "Biryani");
student1.eating();

// Q4 : See if Student is an instance of Human class using instanceof keyword
console.log(student1 instanceof Human);
console.log(student1 instanceof Student);

// Q5 : Use getters and setters to set the real and imaginary parts of the complex number
a.real = 4;
a.imaginary = 2;
b.real = 2;
b.imaginary = 6;

let sum1 = Complex.add(a, b);
console.log(sum1);
console.log(`The sum of the complex number is : ${sum1.real} + i${sum1.imaginary}`);