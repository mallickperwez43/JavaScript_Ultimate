// // Import a whole object -> Method 1 (Mod_1)
// const mod = require('./97_mod1');

// console.log(mod.hello); // returns functions and type
// console.log(mod.hello()); // returns value of function

// console.log(mod.advHello); // returns functions and type
// console.log(mod.advHello("Harry Bhai")); // returns value of function

// console.log("I am differentiator")

// // Use Object Destructuring -> Method 2 (Mod_1)
// const { hello, advHello } = require('./97_mod1');

// console.log(hello); // returns functions and type
// console.log(hello()); // returns value of function

// console.log(advHello); // returns functions and type
// console.log(advHello("Harry Bhai")); // returns value of function


// Mod_2
import { hello_Mod_Two, advHello_Mod_Two } from './97_mod2.js';

console.log(hello_Mod_Two); // returns functions and type
console.log(hello_Mod_Two()); // returns value of function

console.log(advHello_Mod_Two); // returns functions and type
console.log(advHello_Mod_Two("Harry Bhai")); // returns value of function
