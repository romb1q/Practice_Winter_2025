import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [sortedArray, setSortedArray] = useState<(number | string)[]>([]);

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

  const handleSort = () => {
    try {
      const parsedArray = JSON.parse(inputValue) as (number | string)[];
      if (!Array.isArray(parsedArray)) throw new Error("Только массив");
      setSortedArray(sortArray(parsedArray));
    } catch (error) {
      alert("неверные данные");
    }
  };

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
      <div className="card">
        <input
          type="text"
          placeholder='Пример [3,1,4] или ["b", "a", "c"]'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSort} style={{ marginLeft: "10px" }}>Sort</button>
      </div>
      <div>
        <h2>Отсортированный массив:</h2>
        <p>{JSON.stringify(sortedArray)}</p>
      </div>
    </>
  );
}

export default App;
