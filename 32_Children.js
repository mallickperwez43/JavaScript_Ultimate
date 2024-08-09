// Direct as well as deeply nested elments of an element are called its children
/*
    <body>
        <div>
            <p>Hello</p>
        </div>
    </body>

    body ->children(div -> p -> text)
    div -> children(p -> text)
    p -> children(text)
    text -> children(none because its a leaf node)
*/

/*
    Child nodes -> Elements that are direct children
    head & body -> sibling 
    eg -> html -> head & body
*/

/*
    Descendant nodes -> All nested elements, children, their children and so on..
*/

// firstChild lastChild childNodes
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// Following is always true
// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
// elem.hasChildNodes() -> boolean -> to find whether there is a child node

// Note : childNodes(NodeList) looks like an array but its not an array but a collection
// Conversion : array.from(collection) -> now an array
let arr = Array.from(document.body.childNodes);
console.log(arr); 