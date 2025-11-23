// What is JavaScript ?

// 1] JavaScript is a single threaded, non blocking, asynchronous concurrent language.
// 2] It has a call stack, an event loop and a callback queue + other APIs.
// 3] V8 is the JavaScript runtime which has a call stack and a heap.
// 4] The heap is used for the memory allocation and stack hold the execution context.
// 5] DOM, setTimeout, XML, HttpRequest doesn't exist in the V8 engine.


// Call stack
function greeting() {
    sayHi();
}

function sayHi() {
    return "Hi!";
}

greeting();

/*

    |                       |
    |                       |
    |                       |
    |   greeting()(removed) |
    |   sayHi()(removed)    |
    |    (Execution done)   |
    |        sayHi()        |   sayhi function will return Hi!
    |      greeting()       |   greeting will be done then flow will return
    |_______________________|

        Stack   // Lifo
*/


// Asynchronous callbacks

// 1] Sometimes the JavaScript code can take a lot of time and this can block the page re render.
// 2] JavaScript has asynchronous callbacks for non blocking behaviour.
// 3] JavaScript runtime can do only one thing at a time.
// 4] Browsers gives us other things which work along the runtime like Web APIs.
// 5] In node.js these as available as C++ APIs.


// Task Queue

// 1] JavaScript can do only one thing at a time.
// 2] The rest are queued to the task queue waiting to be executed.
// 3] When we run setTimeout, webapis will run a timer and push the function provided to setTimeout to the task queue once the timer ends.
// 4] These tasks will be pushed to the stack where the can be executed.


// Event Loop

// 1] JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events,
//    and executing queued sub-tasks.
// 2] The event loop pushes the tasks from the task queue to the call stack.
// 3] setTimeout(func1, 0) can be used to defer a function until all the pending tasks (so far) have been executed.
// 4] We can see how these things works in action by visiting : loupe js