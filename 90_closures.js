// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives a function access to its outer scope. 

let message = "Good Global";

// hello 1 return the function hello2
function hello1() {
    let message = "Good morning";
    {
        let message = "Good Afternoon";
        console.log("Hello 1 : " + message);
    }

    let c = function hello2() { // closure creation
        console.log("I am c " + message); // hello2 holds reference to the variable message
    }

    return c;
}

c = hello1(); // holds reference to hello2()
c();


// Example 2

function returnFunc() {
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            a = 999;
            z();
        }
        a = 888;
        y();
    }

    return x;
}

let a = returnFunc(); // holds reference to all the functions inside
a();