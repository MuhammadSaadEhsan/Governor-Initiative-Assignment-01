// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// excercise 14
var names = ["Fahad", "Asif", "Hammad"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var invite = names_1[_i];
    console.log("Hi ".concat(invite, "!,I'd like to invite you to have dinner with me"));
}
console.log("I am inviting ".concat(names.length, " people to dinner"));
