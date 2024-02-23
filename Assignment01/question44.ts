// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

var sandwich = function(...ingredients: string[]){
    if(ingredients.length===0){"No ingredients"}
    else{
        console.log("Ingredients are : ");
        for(let index in ingredients){
            console.log(`${+index+1}. items is ${ingredients[index]}`);
        }
    }
}

sandwich("bread","cheese","butter");
sandwich("bread","ketchup","mayonise");
sandwich("bread","kabab","butter","cheese","ham","salad");