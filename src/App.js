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
          showSkipButton: true, // Enable the skip button
          skipLabel: "skip", // Customize the skip button label
          steps: [
            {
              element: introRef.current,
              intro: "This is the counter element.",
            },
            {
              element: ".controls",
              intro: "These are the control buttons.",
            },
            {
              element: ".title",
              intro: "This is the title.",
            },
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
    <>
      <>
        <div class="letter l00 t200">
          <div></div>
        </div>
        <div class="letter l10 t500">
          <div></div>
        </div>
        <div class="letter l20 t180">
          <div></div>
        </div>
        <div class="letter l30 t700">
          <div></div>
        </div>
        <div class="letter l40 t800">
          <div></div>
        </div>
        <div class="letter l50 t900">
          <div></div>
        </div>
        <div class="letter l60 t300">
          <div></div>
        </div>
        <div class="letter l70 t400">
          <div></div>
        </div>
        <div class="letter l80 t320">
          <div></div>
        </div>
        <div class="letter l90 t190">
          <div></div>
        </div>
        <div class="letter l100 t520">
          <div></div>
        </div>
        <div class="letter l05 t380 big">
          <div></div>
        </div>
        <div class="letter l15 t400 big">
          <div></div>
        </div>
        <div class="letter l25 t600 big">
          <div></div>
        </div>
        <div class="letter l35 t650 big">
          <div></div>
        </div>
        <div class="letter l45 t290 big">
          <div></div>
        </div>
        <div class="letter l55 t530 big">
          <div></div>
        </div>
        <div class="letter l65 t420 big">
          <div></div>
        </div>
        <div class="letter l75 t900 big">
          <div></div>
        </div>
        <div class="letter l85 t200 big">
          <div></div>
        </div>
        <div class="letter l95 t180 big">
          <div></div>
        </div>

        <div class="letter l00 t200 d2">
          <div></div>
        </div>
        <div class="letter l10 t500 d2">
          <div></div>
        </div>
        <div class="letter l20 t180 d2">
          <div></div>
        </div>
        <div class="letter l30 t700 d2">
          <div></div>
        </div>
        <div class="letter l40 t800 d2">
          <div></div>
        </div>
        <div class="letter l50 t900 d2">
          <div></div>
        </div>
        <div class="letter l60 t300 d2">
          <div></div>
        </div>
        <div class="letter l70 t400 d2">
          <div></div>
        </div>
        <div class="letter l80 t320 d2">
          <div></div>
        </div>
        <div class="letter l90 t190 d2">
          <div></div>
        </div>
        <div class="letter l100 t520 d2">
          <div></div>
        </div>
        <div class="letter l05 t380 big d2">
          <div></div>
        </div>
        <div class="letter l15 t400 big d2">
          <div></div>
        </div>
        <div class="letter l25 t600 big d2">
          <div></div>
        </div>
        <div class="letter l35 t650 big d2">
          <div></div>
        </div>
        <div class="letter l45 t290 big d2">
          <div></div>
        </div>
        <div class="letter l55 t530 big d2">
          <div></div>
        </div>
        <div class="letter l65 t420 big d2">
          <div></div>
        </div>
        <div class="letter l75 t900 big d2">
          <div></div>
        </div>
        <div class="letter l85 t200 big d2">
          <div></div>
        </div>
        <div class="letter l95 t180 big d2">
          <div></div>
        </div>
      </>
      
      <div className="counter">
        <p className="title">Learn Husky & Intro Js</p>
        <p className="count" ref={introRef}>
          {count}
        </p>
        <div className="controls">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
