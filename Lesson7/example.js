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


// ========= Arrays =========

/*In the example below, we have two arrays that store data about a class of students 
studying JavaScript. The array "jsStudents" contains the names of the students in the class.
The array "jsGrades" stores the marks for these students. 

Remember that an array is just a data type that stores many items instead of a single item. 
Each item in the array is referred to as an element. Each element is assigned an index. In the 
example below "Tom" is put in index 0 of the array jsStudents. "Sue" is in index 1, "Joe" is in index 2 etc.
The first index in an array is always 0. */ 


// ========= Example 1 =========
let jsGrades = [80, 75, 60, 90, 100, 76]; //Here we declare and assign values to jsGrades. Remember, when we declare a letiable

// a space is created in memory to store the values assigned to that letiable. An array creates enough space in
// memory to store all the values assigned to it in the square brackets on the right-hand side of the assignment operator =.

let jsStudents = ["Tom", "Sue", "Joe", "Alice", "Jack", "Jason"];   //Declare jsStudents and assign values to it.


// ========= Example 2 =========
/*We can either access the whole array at once OR access single elements of the array.
Here's an example of using the whole array */

console.log(jsStudents);


// ========= Example 3 =========
//And below is an example of how we would access a single element in the array. We do so by using the index that the element is in
//to identify the specific element we are referring to. The index is indicated in square brackets. E.g.:

console.log("The student at index 0 of jsStudents is " + jsStudents[0]);


// ========= Example 4 =========
//What is the name of the student in index 4 of jsStudents? Uncomment the code below and execute the code to
//see if you are correct

//console.log(jsStudents[4]);


// ========= Example 5 =========
/*If we try to access an element in an array that doesn't exist (e.g. if we try to get
an element at index 100 out of an array that only has 10 elements assigned) the value "undefined" is returned.
This is because we are trying to access an element that we haven't assigned a value.
Trying to access an element with an index that is out of bounds is a very common error that you should watch out for. */

console.log("The student at index 100 of jsStudents is " + jsStudents[100]);


// ========= Example 6 =========
/*If we wanted to write out the names of all the students in jsStudents, it would be
very tedious and time-consuming to write the code for each individual element as we have done above. Instead, we can
use a loop to loop through each element in the array. If we know how many elements are in an array
it will be easy to write a for loop that will loop through each element. With arrays, we can use a 
function called length to see how many elements are in a given array. See below how we use the length function
to see how many elements are in the array "jsGrades" */

let arrayLength = jsGrades.length;
console.log("jsGrades is an array with " + arrayLength + " grades in it.");
console.log();


// ========= Example 7 =========
/*Below we create a for loop that will loop from 0 through all the indices of the array.
Assume that whoever wrote this code wanted the grades in the jsGrades array to correspond to the students in 
jsStudents. We know that the grade at a certain index in jsGrades will, therefore, belong to the student at the corresponding
index of jsStudents (i.e. jsGrades[x] belongs to jsStudents[x]). See how we use the loop below to write out which grade belongs 
to which student: */

for (let i = 0; i < arrayLength; i++) {
  console.log(jsStudents[i] + " scored a grade of " + jsGrades[i] + "% in JavaScript");
}
console.log();


// ========= Example 8 =========
/*Besides the loops that we have covered in this task, we can also use a for...of loop. This type of 
loop can be used to loop through each element in an array. The syntax of this loop is shown below. */

console.log("List of grades printed using for..of loop:");
for (let value of jsGrades) {
  console.log(value);
}


// ========= Example 9 =========
/*We can also use the forEach method to iterate through all the elements in an array as shown below. */

console.log("List of grades printed using forEach:");
jsGrades.forEach(function(value) {
      console.log(value);
    });


// ========= Example 10 =========
/*See an example below of how we can loop through an array and calculate the sum of the elements in the array */

let sum = 0;
for (let value of jsGrades) {
  sum += value;
}
console.log("The result of adding all the elements in jsGrades is " + sum);


// ========= Example 11 =========
/*we could accomplish the same thing using a for loop as shown below*/
sum = 0;
for (let i = 0; i < arrayLength; i++) {
  sum += jsGrades[i];
}
console.log("The result of adding all the elements in jsGrades using a for loop is " + sum);


// ========= Maps =========

// Maps allow us to save key-value pairs, rather than just individual items.

// ========= Example 12 =========

let colourMap = new Map();

// We use the .set function to add key-value pairs to the map. 
colourMap.set("blue", "the sky");
colourMap.set("red", "an apple");
colourMap.set("yellow", "the sun");
colourMap.set("green", "grass");
colourMap.set("orange", "a peach");
colourMap.set("purple", "a flower");
colourMap.set("black", "coal");
colourMap.set("white", "snow");

// We now create a for loop to print the key-value pairs. 
for (let [key,value] of colourMap) {
    console.log(`The colour of ${value} is ${key}.`);
}


// ****************** END OF EXAMPLE CODE *********************