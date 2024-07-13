/* var -> Before ES6 in JS var keyword was used to declare a  variable
But in todays date var Keyword is not used to declare a variable because due to some reasons it can introduce bugs in our code

so we have to use let keyword instead of var keyword
let keyword is used to declare a block scoped variable

const is used to declare a constant variable
contants are those variables whose value cannot be changed throughout the code 
*/

console.log("JavaScript tutorial 3 : var, let and const")
let a = 45;
let b = "Harry"
const author =  "Harry"
// author = 5 // Throws an error because constant cannot be changed
// let b = 9 -> let cannot be re-declared
b = 9 // updation is possible in let
let c = null
let d = undefined

/* 
var vs let in JS
1] var is globally scoped while let and const are block scoped
2] var can be updated and re-declared within its scope
3] let can be updated but not re-declared
4] const cannot be updated nor re-declared
5] var variables are intialised with undefined whereas let and const variables are not initialized
6] const must be initialized during declaration unlike let and var 
*/

/* 
when we use var keyword to declare a variable then it will be globally scoped 
{
  var b = "this"
  console.log(b) // this
}
console.log(b)  // this
*/

// changed var b = "Harry" to let b = "Harry"
// when we use let keyword to declare a variable then it will be blocked scoped
{
  let b = "this"
  console.log(b) // this 
}
console.log(b) // Harry
console.log(author)