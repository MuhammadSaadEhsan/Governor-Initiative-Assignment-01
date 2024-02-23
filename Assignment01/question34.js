// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favorite_pizza = ["Fajita pizza", "Extra cheesy pizza", "pepperoni pizza"];
for (var _i = 0, favorite_pizza_1 = favorite_pizza; _i < favorite_pizza_1.length; _i++) {
    var pizza = favorite_pizza_1[_i];
    console.log(pizza);
}
for (var _a = 0, favorite_pizza_2 = favorite_pizza; _a < favorite_pizza_2.length; _a++) {
    var pizza = favorite_pizza_2[_a];
    console.log("i like ".concat(pizza));
}
console.log("How much you like pizza!?\nThere are very kinds of pizza i have tested few ones and i want to taste more i want to eat them with ketch up and spice souce\ni really love pizza!");
