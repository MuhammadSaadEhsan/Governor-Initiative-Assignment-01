// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians){
    for(let name of magicians){
        console.log(name);
    }
}

var magicians = ["Saad","Hammad","Ehsan","Imran","Zeeshan"];
show_magicians(magicians);