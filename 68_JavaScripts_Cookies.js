console.log(document.cookie);
document.cookie = "name=harry1122334400";
document.cookie = "name2=harry1122334400";  // this is a set cookie call
document.cookie = "name=harry"; // updates the cookie of key name
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
// cookie doest touches other cookies instead just gets adds up when its assigned

// cookie options -> you cant set multiple cookies but give it a path & expires


// Note :
// 1] The name = value pair, after encodeURIComponent, should not exceed 4 KB
// 2] Total number of Cookies are limited to around 20+ (Exact number is browser dependent)