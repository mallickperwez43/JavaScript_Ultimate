// Q1 Write a program using prompt function to take input of age as a value from the user
// and use alert to tell him if he can drive!

// let age = prompt("Enter your age");
// age = Number.parseInt(age);

// const canDrive = (age)=>{
//     return age >= 18 ? true : false;
// }

// if(canDrive(age)){
//     alert("Yes you can drive");
// }
// else{
//     alert("You cannot drive")
// }

// Q2 : In Q1 use confirm to ask the user if he wants to see the prompt again

// let runAgain = true;
// const canDrive = (age)=>{
//     return age >= 18 ? true : false;
// }

// while(runAgain){
//     let age = prompt("Enter your age");
//     age = Number.parseInt(age);

//     if(canDrive(age)){
//         alert("Yes you can drive");
//     }
//     else{
//         alert("You cannot drive")
//     }

//     runAgain = confirm("Do you want to play again?");
// }

// Q3 : In the previous question use console.error to log the error if the age entered is negative

let runAgain = true;
const canDrive = (age)=>{
    return age >= 18 ? true : false;
}

while(runAgain){
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    
    if(age < 0){
        console.error("Please enter a valid age");
        break;
    }

    if(canDrive(age)){
        alert("Yes you can drive");
    }
    else{
        alert("You cannot drive")
    }

    runAgain = confirm("Do you want to play again?");
}