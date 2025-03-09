import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 3
function getKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}
const car = { name: "Toyota", model: 4, isElectric: false };
const carKeys = getKeys(car);




// 2
type ConditionalType<T extends boolean> = T extends true ? string : number;
let val1: ConditionalType<true> = "Hello";
let val2: ConditionalType<false> = 42;





// 1
function sortArray<T extends number | string>(arr: T[]): T[] {
  return [...arr].sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    }
    throw new Error("Unsupported data type for sorting.");
  });
}
const array = [3, 1, 4, 5, 2];
const sortedArray = sortArray(array);





function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h2>Отсортированный массив:</h2>
        <p>{JSON.stringify(sortedArray)}</p>
      </div>
      <div>
        <h2>Ключи объекта car:</h2>
        <p>{JSON.stringify(carKeys)}</p>
      </div>
      <div>
        <h2>Conditional Type:</h2>
        <p>val1 (string): {val1}</p>
        <p>val2 (number): {val2}</p>
      </div>
    </>
  );
}

export default App;