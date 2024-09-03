let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)  // sets the key value pair

console.log(`The value at ${key} is ${localStorage.getItem(key)}`) // get the valu of the key

if (key == "red" || key == "blue") {
    localStorage.removeItem(key)  // removes the key as well its corresponding value
}

if (key == 0) {
    localStorage.clear() // clears everything
}

console.log(localStorage.key(0)) // gets the key at index 0

console.log(localStorage.length) // gives the length of the pair

// NOTE
// 1] Both key and values must be strings
// 2] We can use the two JSON methods to store objects in localStorage
// JSON.stringify(object) converts objects to JSON strings
// JSON.parse(object) converts string to objects(must be a valid JSON)