let first = document.getElementById("first")

// get attribute value
let a = first.getAttribute("class")
console.log(a)

// check if attribute exists -> returns boolean
console.log(first.hasAttribute("class"))  
console.log(first.hasAttribute("style"))

// set attribute value
// first.setAttribute("hidden", "true") // sets attribute -> hidden
// first.setAttribute("class", "true sachin") // sets attribute -> class

// remove attribute
// first.removeAttribute("class")

// get all attributes
console.log(first.attributes)

// data-* attributes
console.log(first.dataset) // returns object
console.log(first.dataset.game)
console.log(first.dataset.player)