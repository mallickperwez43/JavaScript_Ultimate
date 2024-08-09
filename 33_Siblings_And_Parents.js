// $0 -> reference of most recent selected element in the panel
// $1 -> second most recent ... so on

/*
    DOM Collections
    1] Read only
    2] They are live. elem.childNodes(reference) will automatically update if childNodes of elem is changed
    3] They are iterable using for... of loop
*/
// select all paragraph elements in the document
const paragraphs = document.querySelectorAll('p');

for(const paragraph of paragraphs){
    console.log(paragraph.textContent);

    paragraph.style.color = 'red';
    paragraph.style.fontWeight = 'bold'
}

// Siblings -> nodes that are children of the same parent (<head> and <body> -> siblings)
// <body> is called "next" or "right" 
// <head> is called "previous" or "left"
/* eg
const p = document.querySelector('p');

console.log(p.nextSibling);
console.log(p.previousSibling);
*/
console.log('\n');

console.log(document.body.firstChild);
let a = document.body.firstChild;

console.log(a.parentNode); // returns node
console.log(a.parentElement); // returns element 