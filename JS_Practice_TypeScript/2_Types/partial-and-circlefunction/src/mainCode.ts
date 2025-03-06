type Car = {
    name: string;
    model: number;
};
  
type PartialCar = Partial<Car>;
  
const firstCar: PartialCar = {model: 5};
const secCar: PartialCar = { name: "Ford" };
  

function infiniteLoop(): never {
    while (true) {
      console.log("Бесконечный цикл...");
    }
}

console.log("машины: ", firstCar, secCar);
console.log("цикл: ", infiniteLoop);
