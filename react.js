import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Counter />);
 