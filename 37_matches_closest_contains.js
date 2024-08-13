// matches() method returns true if the element has a matching class name or id name
// matches() method returns false if the element has no matching class name or id name

let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".box"));  // yes there exists a box class with id id1

// closest() method returns the first element within the document that matches the specified group of selectors
let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box"));  // yes there exists a box class with id sp1
console.log(sp1.closest("#sp1"));  // returns element with id sp1


// contains() method returns true if the element is a descendant of the element passed as an argument
console.log(id1.contains(sp1));  // returns true
console.log(sp1.contains(sp1));  // returns true
console.log(sp1.contains(id1));  // returns false