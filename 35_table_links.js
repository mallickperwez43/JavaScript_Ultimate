/*
    Certain Dom elements may provide additonal properties specific to their type for convinience 
*/

let t = document.body.firstElementChild.firstElementChild;
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tFoot);
console.log(t.tHead.firstElementChild);
console.log(t.tBodies);

let tb = document.body.firstElementChild.lastElementChild;
console.log(tb.rows);
console.log(tb.rows[2].cells);
console.log(tb.rows[2].sectionRowIndex);
console.log(typeof document);
console.log(typeof window);