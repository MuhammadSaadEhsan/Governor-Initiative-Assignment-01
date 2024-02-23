// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// excercise 14
var names = ["Fahad","Asif","Hammad"];
for (var invite of names){
    console.log(`Hi ${invite}!,I'd like to invite you to have dinner with me`);
}

console.log(`I am inviting ${names.length} people to dinner`);