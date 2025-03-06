"use strict";
const firstCar = { model: 5 };
const secCar = { name: "Ford" };
function infiniteLoop() {
    while (true) {
        console.log("Бесконечный цикл...");
    }
}
console.log("машины: ", firstCar, secCar);
console.log("цикл: ", infiniteLoop);
