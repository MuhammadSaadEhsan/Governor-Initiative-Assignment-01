// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var names = ["Fahad", "Asif", "Hammad"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var invite = names_1[_i];
    console.log("Hi ".concat(invite, "!,I'd like to invite you to have dinner with me "));
}
console.log("Asif can't come");
names[names.indexOf("Asif")] = "Saad";
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var invite = names_2[_a];
    console.log("Hi ".concat(invite, "!,I'd like to invite you to have dinner with me"));
}
