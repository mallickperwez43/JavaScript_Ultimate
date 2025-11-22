const regex = /very/g; // a flobal regular expression

const text = "Harry is a very very nice awesome nice very boy";

// replce "very" with "VERY"
console.log(text.replace("very", "VERY")); // only first occurance will change

// replce "very" with "good"
console.log(text.replace(regex, "good")); // regular expression will change every occurances 

// Referrance Website : https://regexr.com