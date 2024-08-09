// dom manipulation
// document.getElementsByClassName("className") -> gives the element by that class name (html)


/* DOM TREE
All nodes are objects
3 main types of nodes
1] text nodes
2] element nodes
3] comment nodes

<html> -> root
<head>, <body> -> children

NOTE -> A text node is always a leaf of the tree.
*/

/*  Auto Correction
    If you write an erroneous HTML , browser tends to correct it 
    <span>I am a span </div> -> wrong 
    <span>I am a span </span> -> auto correction (</div> removed added the </span>)
*/
console.log(document.head); // gives head
console.log(document.documentElement); // give html page
console.log(document.title); // title will change to something // returns string