// Arrow Functions revisited

const sayHello = (name, greetings) => {
    console.log(greetings + " " + name);
}

const x = {
    name: "Harry",
    role: "JS Developer",
    exp: 30,
    show: function () {
        // The below was the trick that works earlier

        // console.log(this); // object x 
        // let that = this; //store in a variable
        // setTimeout(function f() {
        //     console.log(this); // its a window object for function f
        //     console.log(`The name is ${that.name} \nThe role is ${that.role}`); // use the variable
        // }, 2000);

        // arrow function solves this problem and takes the this from its lexical parent environment
        setTimeout(() => {
            console.log(this); // object x
            console.log(`The name is ${this.name} \nThe role is ${this.role}`);
        }, 2000);
    }
};

sayHello("Harry", "Good Afternoon");
x.show();