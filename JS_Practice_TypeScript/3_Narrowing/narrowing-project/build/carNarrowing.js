"use strict";
function getCar(car) {
    if ("model" in car && "year" in car) {
        return `Данные автомобиля: ${car.brand} ${car.model}, ${car.year}`;
    }
    else {
        return `Бренд: ${car.brand}.`;
    }
}
console.log(getCar({ brand: "Lada", model: "Vesta", year: 2025 }));
console.log(getCar({ brand: "Bugatti" }));
