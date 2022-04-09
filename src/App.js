import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // useEffect(() => {
  //   setInterval(setSeconds(seconds + 1), 1000);
  // }, [seconds]);
  const handelStop = () => {};
  const handelStart = () => {};
  const handelReset = () => {};

  return (
    <div className="timer-app">
      <h1>CODER TIMER</h1>
      <div className="timer">
        <div className="timer-display">
          <p>
            {hours}:{minutes}:{seconds}
          </p>
        </div>
        <div className="button-wrapper">
          <button onClick={handelStop}>STOP</button>
          <button onClick={handelStart}>START</button>
          <button onClick={handelReset}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
