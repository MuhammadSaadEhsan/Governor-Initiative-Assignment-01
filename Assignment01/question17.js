// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var names = ["Fahad", "Asif", "Hammad"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var invite = names_1[_i];
    console.log("Hi ".concat(invite, "!,I'd like to invite you to have dinner with me"));
}
console.log("\nAsif can't come\n");
names[names.indexOf("Asif")] = "Saad";
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var invite = names_2[_a];
    console.log("Hi ".concat(invite, "!,I'd like to invite you to have dinner with me"));
}
console.log("\nGood news guys i have found the bigger dinner table\n");
names.unshift("Hamza");
var middleIndex = Math.floor((names.length) / 2);
names.splice(middleIndex, 0, "Taha");
names.push("Rayyan");
for (var _b = 0, names_3 = names; _b < names_3.length; _b++) {
    var invite = names_3[_b];
    console.log("Hi ".concat(invite, "!,I'd like to invite you to have dinner with me"));
}
console.log("\ni can only invite two people for dinner!\n");
for (var i = names.length; i > 2; i--) {
    var poppedname = names.pop();
    console.log("i am sorry ".concat(poppedname, ", I can't invite you to dinner"));
}
for (var _c = 0, names_4 = names; _c < names_4.length; _c++) {
    var name_1 = names_4[_c];
    console.log("dear ".concat(name_1, ", you are still invited!"));
}
names.pop();
names.pop();
console.log(names);
