/*
    Element only navigation
    Sometimes we dont want any text or comment nodes
    Some links only takes Element nodes into account 

    document.previousElementSibling -> previous sibling which is an element
    document.nextElementSibling -> next sibling which is an element

    document.firstElementChild -> first Element Child
    document.lastElementChild -> last Element Child
*/

// function to change background of nav to red
const changeBgRed = ()=>{
    document.body.firstElementChild.style.background = "red";
}

let b = document.body;
console.log("First Child of b is : ", b.firstChild); 
console.log("First Element Child of b is : ", b.firstElementChild);