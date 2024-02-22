import React, { useState, useRef } from "react";
import Model from "./Model.jsx";
import { createPortal } from "react-dom";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeTaken, setTimeTaken] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  if (timeTaken > 2 * targetTime * 1000) {
    clearInterval(timer.current);
    dialog.current.show();
  }
  function resetTimer() {
    setTimeTaken(0);
    setStartTimer(false);
  }
  const timerStart = () => {
    setStartTimer(true);
    timer.current = setInterval(() => {
      setTimeTaken((pre) => pre + 10);
    }, 10);
  };

  const timerStop = () => {
    dialog.current.show();
    clearInterval(timer.current);
  };

  return (
    <>
      {createPortal(
        <Model
          ref={dialog}
          targetTime={targetTime}
          timeTaken={timeTaken}
          resetTimer={resetTimer}
        />,
        document.getElementById("modal"),
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <Model />
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={startTimer ? timerStop : timerStart}>
            {startTimer ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={startTimer ? "active" : ""}>
          {startTimer ? "Time is running... " : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
