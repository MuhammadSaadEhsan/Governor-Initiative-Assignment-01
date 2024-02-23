// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


//PROGRAM: 01
var myName = "hAmmAd";  //assigning value of person name to a variable 'myName'
console.log(myName.toLowerCase()); //using built-in function toLowerCase() to lower case 'myname' variable
console.log(myName.toUpperCase()); //using built-in function toLowerCase() to lower case 'myname' variable

//for title case -------------------

// making another variable to store name in titleCase, currently assigning first character of name in upper case
var nameInTitleCase =`${myName[0].toUpperCase()}`;

//using for loop for adding characters of names after 0 index in lower case
for(let i = 1; i<myName.length; i++){  
    nameInTitleCase = nameInTitleCase+myName[i].toLowerCase();
}
console.log(nameInTitleCase); //printing the name in title case

//PROGRAM: 02
console.log(4+4);  //performing addtition operation and printing the result of 4+3
console.log(12-4);  //performing subtraction operation and printing the result of 12-4
console.log(4*2);  //performing multiplication operation and printing the result of 4*2
console.log(4/0.5);  //performing division operation and printing the result of 4/0.5