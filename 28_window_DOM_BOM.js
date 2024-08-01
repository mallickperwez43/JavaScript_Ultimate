console.log(window);

// window -> global object ->has 3 things when a JS runs in a browser
// -> DOM 
// -> BOM
// -> JavaScript Core 

// window object represents browser window and provides methods to control it. It is a global object

// DOM -> Document object model
// represents the page content as HTML
console.log(document.body);  // page body as js object
document.body.style.background = "green"; // dynamic change of page color to green // not recommended

// BOM -> Browser object model
// represents additional objects provided by the browser(host envirnment) for working with everything except the document

// The functions alert / confirm / prompt are also a part of the BOM
location.href = "https://codewithharry.com"; // redirect to codewithharry.com 