import "./App.css";
import { useState, useEffect, useRef } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";

function App() {
  const [count, setCount] = useState(0);
  const introRef = useRef(null);

  useEffect(() => {
    const startIntro = () => {
      introJs()
        .setOptions({
          steps: [
            {
              element: introRef.current,
              intro: "This is the counter element.",
            },
            // Add more steps as needed
          ],
        })
        .start();
    };

    startIntro();
  }, []);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="counter">
      <p className="title">Learn Husky & Intro Js</p>
      <p className="count" ref={introRef}>{count}</p>
      <div className="controls">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
