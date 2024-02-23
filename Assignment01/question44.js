// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var sandwich = function () {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    if (ingredients.length === 0) {
        "No ingredients";
    }
    else {
        console.log("Ingredients are : ");
        for (var index in ingredients) {
            console.log("".concat(+index + 1, ". items is ").concat(ingredients[index]));
        }
    }
};
sandwich("bread", "cheese", "butter");
sandwich("bread", "ketchup", "mayonise");
sandwich("bread", "kabab", "butter", "cheese", "ham", "salad");
