// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
var myName = "Saad Ehsan";
console.log("Is length of myName (Saad Ehsan) equal to 8? I predict False.");
console.log(myName.length == 8);
console.log("Is length of myName (Saad Ehsan) equal to 10? I predict True.");
console.log(myName.length == 10);
console.log("Is length of myName (Saad Ehsan) not equal to 6? I predict True.");
console.log(myName.length != 6);
console.log("Is length of myName (Saad Ehsan) not equal to 10? I predict False.");
console.log(myName.length != 10);
// • Tests using the lower case function
console.log("Is myName (Saad Ehsan) in lower case? I predict False.");
console.log(myName == myName.toLowerCase());
console.log("Is second character of myName (Saad Ehsan) in lower case? I predict True.");
console.log(myName[1] == myName[1].toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
age = 19;
console.log("Is age == 16? I predict False.");
console.log(age == 16);
console.log("Is age == 19? I predict True.");
console.log(age == 19);
console.log("Is age != 16? I predict True.");
console.log(age != 16);
console.log("Is age != 19? I predict False.");
console.log(age != 19);
console.log("Is age < 16? I predict False.");
console.log(age < 16);
console.log("Is age <= 19? I predict True.");
console.log(age <= 19);
console.log("Is age > 22? I predict False.");
console.log(age > 22);
console.log("Is age >= 16? I predict True.");
console.log(age >= 16);
// • Tests using "and" and "or" operators
var age = 19;
console.log("Is age < 22 and age > 16 ? I predict True.");
console.log(age < 22 && age > 16);
console.log("Is age < 22/2 and age > 16 ? I predict False.");
console.log(age < 22 / 2 && age > 16);
console.log("Is age < 22 or age > 21 ? I predict True.");
console.log(age < 22 || age > 21);
console.log("Is age < 22/2 or age < 16 ? I predict False.");
console.log(age < 22 / 2 || age < 16);
// • Test whether an item is in a array
var numbers = [1, 2, 3, 45, 23, 532, 6434, 2454534];
console.log("Is 45 in an array of numbers? I predict True.");
console.log(numbers.indexOf(45) != -1);
console.log("Is 22 in an array of numbers? I predict False.");
console.log(numbers.indexOf(22) != -1);
// • Test whether an item is not in a array
var numbers = [1, 2, 3, 45, 23, 532, 6434, 2454534];
console.log("Is 25 not in an array of numbers? I predict True.");
console.log(numbers.indexOf(25) == -1);
console.log("Is 23 not in an array of numbers? I predict False.");
console.log(numbers.indexOf(23) == -1);
