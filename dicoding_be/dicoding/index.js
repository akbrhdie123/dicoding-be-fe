const {coffeeStock, isCoffeeMachineReady} = require('./state');

const makeCoffee = (type, miligram) => {
    if (coffeeStock[type] >= miligram) {
        console.log("kopi berhasil di buat!");
    } else {
        console.log("Biji Kopi Habis!");
    }
}

makeCoffee("robusta", 80);

console.log(coffeeStock);
console.log(isCoffeeMachineReady);