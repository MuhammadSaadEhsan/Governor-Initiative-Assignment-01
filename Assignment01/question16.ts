// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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