//************* HELP *****************
//REMEMBER THAT IF YOU NEED SUPPORT ON ANY ASPECT OF YOUR COURSE SIMPLY LOG IN TO www.hyperiondev.com/support TO: 
//START A CHAT WITH YOUR MENTOR, SCHEDULE A CALL OR GET SUPPORT OVER EMAIL.
//************************************


// PLEASE ENSURE YOU OPEN THIS FILE IN VS Code otherwise you will not be able to read it.


// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript. 
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans. 
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans across several lines,
then you would use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.


// ========= Reading JavaScript code ========= 
// You're actually reading a JavaScript program right now.
// Comments in JavaScript appear in GREEN if you have the file opened in Visual Studio Code 
// Most other programming languages have the same structure as JavaScript, so if you learn JavaScript, you can learn the others 
// more easily! It's not like learning human languages.


//  =========  The console.log() function ========= 
// You may want your program to display or output information to the user.
// The most common way to view program output is to use the console.log function.
// To use print, we enter the console.log command followed by one or more arguments. 


// ************ Example 1 ************
console.log("Hello, World!");
// When you run this program the computer will output the argument Hello, World!
// Note that the argument is enclosed in double quotes ("..."), whcih are not displayed in the output.
// This is because "Hello, World!" is a string or list of characters.


// ************ Example 2 ************
console.log("Printing a string."); 

// A common SYNTAX error you could make above is by forgetting to add a closing " or a semicolon (;) at the end.
// Remember that all opening quotation marks (") require a closing one!


// ========= How to get input with prompt() ========= 
// Sometimes you want a user to enter something through the keyboard.
// The following input command will show the text "Enter your name: " in the output box of the program and the program will halt
// until the user enters something with their keyboard and presses ENTER.


// ========= How to give user input ========= 
// In this course, we will be using the Chrome console to give input.
// To see how the following examples work, double click on the index.html file in this task folder. 
// Notice how you are prompted to answer the questions below when you open the web page!
// Right-click on the web page and select "Inspect" to see all outputs from this JavaScript document.
// NOTE: You only need to do this when you need user input. If you don't need user input, you only need a JavaScript file 
// and can debug and run in VSCode as described in the additional reading in this task folder. 


// ========= How the HTML file is talking to this file ========= 
// If you open the HTML file in VSC, you will see that a script tag (<script>) is used to link this file to the HTML file!
// Don't worry too much about how this works for now, you will go into much more detail later. 
// For now, you can simply copy-paste the code in index.html into a new HTML file that you can use if you need to get user  
// input in your compulsory tasks. 
// This has been done for you for this compulsory task so that you can see how it's done for the next task. 
// Now, let's get back to prompt(). 


// ************ Example 3 ************
// The following input commands will get the user's name and age. 

let name = prompt("Enter your name: "); 
let age = prompt("Enter your age: ");


// The variable 'name' stores what the user entered into the box as a string.
// The variable 'age' also stores what the user entered into the box as a string.
// Now, when you try running this file, notice the output produced by the following command.

console.log(name, age);
console.log(name + " is "+ age + " years old!");

// A common SYNTAX error you could make above is by forgetting to add a closing ‘)’.
// Remember that all opening brackets ‘(’ , require a matching closing one!


// ****************** END OF EXAMPLE CODE ********************* 


