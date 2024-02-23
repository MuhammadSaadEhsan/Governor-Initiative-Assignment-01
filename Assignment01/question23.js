// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var age = 19;
console.log("Is age < 16? I predict False.");
console.log(age < 16);
console.log("Is age >= 16? I predict true.");
console.log(age >= 16);
console.log("Is age == 16? I predict False.");
console.log(age == 16);
var age2 = 45;
console.log("Is age2 > 10? I predict True.");
console.log(age2 > 10);
console.log("Is age2 > age? I predict True.");
console.log(age2 > age);
console.log("Is age2 < 100? I predict True.");
console.log(age2 < 100);
var myName = "SAAD";
console.log("Is name in lower case? I predict False.");
console.log(myName == myName.toLowerCase());
console.log("Is name in upper case? I predict True.");
console.log(myName == myName.toUpperCase());
console.log("Is myName is an array? I predict False.");
console.log(Array.isArray(myName));
var numbers = [1, 2, 3];
console.log("Is numbers is not an array? I predict False.");
console.log(!Array.isArray(numbers));
