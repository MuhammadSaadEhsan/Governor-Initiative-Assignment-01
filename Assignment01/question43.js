// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
    return magicians;
}
function showMagician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_1 = magicians_1[_i];
        console.log(name_1);
    }
}
var magicians = ["Saad", "Hammad", "Ehsan", "Imran", "Zeeshan"];
var greatMagicians = makeGreat(magicians.slice(0));
showMagician(magicians);
showMagician(greatMagicians);
