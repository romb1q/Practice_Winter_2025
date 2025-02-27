import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const styles = {
    backgroundColor: count > 10 ? "red" : "green",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>{count}</h1>
      <button style={styles} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
