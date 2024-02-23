// // Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer,modelName,...rest){
    var carObj = {
        manufacturer : manufacturer,
        modelName : modelName,
        
    }
    for(var i = 0; i < rest.length;i=i+2){
        carObj[rest[i]] = rest[i+1];
    }

    return carObj;
}
console.log(carInfo("Saad", "audi", "year", 2023, "condition", 'new', "brand", 'branded'));
