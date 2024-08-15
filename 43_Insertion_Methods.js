let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>'; // traditional method

let div = document.createElement('div')
div.innerHTML = '<h1>Hello World!</h1>'
// a.append(div) // appending a new element to the end of the container

// a.prepend(div) // prepending a new element to the beginning of the container

// a.before(div) // inserting a new element before the container

// a.after(div) // inserting a new element after the container

// a.replaceWith(div) // replacing the container with a new element