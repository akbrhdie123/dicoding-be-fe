import {coffeeStock as stock, isCoffeeMachineReady} from './state.js';
 
const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}
 
displayStock(stock);

console.log(stock);
console.log(isCoffeeMachineReady);