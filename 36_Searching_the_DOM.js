/*
    Searching the DOM
    
    -> DOM navigation properties are helpful when the elements are close to each other.
    The DOM tree represents the HTML document as a tree-like structure.
    The DOM navigation properties are:
        - parentNode
        - childNodes
        - firstChild
        - lastChild
        - nextSibling
        - previousSibling   
    
    -> IF they are not close to each other, we have some more methods to search the DOM.
*/

// Change the card title to red
let ctitle = document.getElementById("firstcardtitle");
ctitle.style.color = "blue";

// using querySelectorAll
let cTitles = document.querySelectorAll(".card-title");
cTitles[0].style.color = "blue";
cTitles[1].style.color = "red";
cTitles[2].style.color = "green";
console.log(cTitles);

document.querySelector(".this").style.color = "black";
document.querySelector(".this").style.background = "palevioletred";
document.querySelector(".this2").style.color = "palevioletred";
document.querySelector(".this2").style.background = "darkslategrey";
document.querySelector(".this3").style.color = "white";
document.querySelector(".this3").style.background = "palevioletred";

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));