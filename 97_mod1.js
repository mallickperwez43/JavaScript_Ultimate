// Common JS Modules

const hello = () => {
    console.log("Hello Harry");
    console.log("Hello I came from file 97_mod1.js & I am hello function");
}

const advHello = (name) => {
    console.log(`Hello ${name}`);
    console.log("Hello I came from file 97_mod1.js & I am advance hello function");
}

module.exports = { hello, advHello };