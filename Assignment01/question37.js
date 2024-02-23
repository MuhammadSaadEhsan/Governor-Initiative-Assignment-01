// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(msg, size) {
    if (msg === void 0) { msg = 'I love TypeScript'; }
    if (size === void 0) { size = 'large'; }
    console.log("The size of the t-shirt is ".concat(size, ", the message to print on t-shirt is '").concat(msg, "'"));
}
make_shirts();
make_shirts(undefined, 'medium');
make_shirts('Hard work pays off', 'small');
