// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_1 = magicians_1[_i];
        console.log(name_1);
    }
}
var magicians = ["Saad", "Hammad", "Ehsan", "Imran", "Zeeshan"];
make_great(magicians);
show_magician(magicians);
