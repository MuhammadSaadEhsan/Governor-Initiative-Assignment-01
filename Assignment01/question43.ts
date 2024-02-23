// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function makeGreat(magicians){
    for(let i=0; i<magicians.length; i++){
        magicians[i] = `the Great ${magicians[i]}`;
    }        
    return magicians;
}

function showMagician(magicians){
    for(let name of magicians){
        console.log(name);
    }
}

var magicians = ["Saad","Hammad","Ehsan","Imran","Zeeshan"];
var greatMagicians = makeGreat(magicians.slice(0));
showMagician(magicians);
showMagician(greatMagicians);
