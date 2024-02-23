// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

var names = ["Fahad","Asif","Hammad"];
for (var invite of names){
    console.log(`Hi ${invite}!,I'd like to invite you to have dinner with me`);
}
console.log("\nAsif can't come\n");
names[names.indexOf("Asif")] = "Saad";
for (var invite of names){
    console.log(`Hi ${invite}!,I'd like to invite you to have dinner with me`);
}
console.log("\nGood news guys i have found the bigger dinner table\n");
names.unshift("Hamza");
var middleIndex = Math.floor((names.length)/2);
names.splice(middleIndex,0,"Taha");
names.push("Rayyan");
for (var invite of names){
    console.log(`Hi ${invite}!,I'd like to invite you to have dinner with me`);
}

console.log("\ni can only invite two people for dinner!\n");
for (let i = names.length; i > 2; i--){
    let poppedname = names.pop();
    console.log(`i am sorry ${poppedname}, I can't invite you to dinner`);
}

for (let name of names) {
    console.log(`dear ${name}, you are still invited!`);
}
names.pop();
names.pop();
console.log(names);