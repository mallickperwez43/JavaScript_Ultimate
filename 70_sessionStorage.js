// same as the localStorage
// just survives the page refresh and dies check tab is closed or opened in a new tab

// Storage Event -> it trigers when the data gets updated in localStorage or sessionStorage
window.onstorage = (e) => {
    alert("Changed")
    console.log(e)
}