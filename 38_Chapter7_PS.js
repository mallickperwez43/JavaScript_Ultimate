// Q1 : Create a navbar and change the color of its first element to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// Q2 : Create a table without tbody Now use "view source code" button to check whether it has a tbody or not 

// Ans : No because it does not have a tbody

// Q3 : Create an element with 3 children. Now change the color of the first and the last element to green
document.getElementsByClassName("container")[0].firstElementChild.style.color = "green";
document.getElementsByClassName("container")[0].lastElementChild.style.color = "green";

// Q4 : Write a javascript code to change the background of all <li> tags to cyan
Array.from(document.getElementsByClassName("list")).forEach((element) => {
    element.style.background = "cyan";
});

// Q5 : Which of the folowing is used to look for the farthest ancestor that matches a given CSS selector?
// (a) matches
// (b) closest
// (c) contains
// (d) none of these -> ans 

// a, b c -> closest batate hai farthest koi nhi batata