import { useState } from "react";

export default function Form() {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Value:", inputVal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder=""
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
