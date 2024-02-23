// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "hAmmAd"; //person name
console.log(myName.toLowerCase()); //to print in lowercase
console.log(myName.toUpperCase()); //to print upper case
//for title case -------------------
var nameInTitleCase = "".concat(myName[0].toUpperCase());
for (var i = 1; i < myName.length; i++) {
    nameInTitleCase = nameInTitleCase + myName[i].toLowerCase();
}
console.log(nameInTitleCase);
