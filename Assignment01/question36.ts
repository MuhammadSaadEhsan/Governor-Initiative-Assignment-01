// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(msg , size){
    console.log(`The size of the t-shirt is ${size}, the message to print on t-shirt is '${msg}'`);
}

var message = "Less is more";
var size = "medium";

make_shirt(message, size);