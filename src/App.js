import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(50);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  const handelStop = () => {
    clearInterval(timer);
  };
  const handelStart = () => {
    setInterval(timer);
  };

  const handelReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="timer-app">
      <h1>CODER TIMER</h1>
      <div className="timer">
        <div className="timer-display">
          <p>
            {hours < 10 ? "0" + hours : hours}:
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
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
