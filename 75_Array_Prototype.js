
let a = {
    name2: "Harry",
    language: "JavaScript"
    // run: () => { // self object ke pass bhi hoga toh yeh method chalega
    //     alert("self run");
    // }
}

console.log(a);

// JavaScript objects  have a special property called prototype that is either null or references another object
// When we try to read a property from an object and its missing, JavaScript automatically takes it from the prototype
// This is called "Prototypal Inheritance"

// Setting a prototype
// We can set a prototype by setting __proto__

let p = {
    run: () => {
        alert("run");
    }
}

a.__proto__ = p; // a ka prototype hai p

p.__proto__ = { // p ka prototype hai yeh object
    name: "Jackie"
}

a.run();

console.log(a.name);