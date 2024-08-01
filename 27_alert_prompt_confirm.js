// alert -> used to invoke a mini window with a message

alert("Enter the value of a!");

// prompt -> used to take user input as string
let a = prompt("Enter 'a' here", "0"); // second value is a default argument
a = Number.parseInt(a);
alert("You entered 'a' of type : " + (typeof a));
// document.write(a); // places the entered value on the document

// confirm -> shows a message and waits for the user to press ok or cancel
// Returns true for ok and false for cancel
let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a);
} 
else{
    document.write("Please allow me to write");
}