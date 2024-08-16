let a = document.getElementsByClassName('container')[0]

a.onclick = () => {
    let b = document.getElementsByClassName('container')[0]
    b.innerHTML = 'Hello World!'
}

// onclick event -> if its written here in js file as well as in html file
// then js file fucntion will be executed
// html file onclick event -> would be overrided by js file function