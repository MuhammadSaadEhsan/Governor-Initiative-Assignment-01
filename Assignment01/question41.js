// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_1 = magicians_1[_i];
        console.log(name_1);
    }
}
var names = ["Saad", "Hammad", "Ehsan", "Imran", "Zeeshan"];
show_magicians(names);
