import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    const unusedVariable = "I am unused!";
    setCount((prevCount) => prevCount + 1);
    console.log("Increase button clicked!");
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => setCount(0);
  return (
    <div className="counter">
      <p className="title">Learn Husky & Intro Js</p>
      <p className="count">{count}</p>
      <div className="controls">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
