// Q4 : Write a program to change the url to google.com(Redirection)
// if user enters a number greater than 4

let number = prompt("Enter your number");
number = Number.parseInt(number);

if(number > 4){
    location.href = "https://google.com";
}

// Q5 : Change the background of the page to yellow red or any other color based on 
// user input through prompt

let color = prompt("Enter the page background color");
document.body.style.background = color;