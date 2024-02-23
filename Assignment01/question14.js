// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var names = ["Fahad", "Asif", "Hammad"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var invite = names_1[_i];
    console.log("Hi ".concat(invite, "!,I'd like to invite you to have dinner with me"));
}
