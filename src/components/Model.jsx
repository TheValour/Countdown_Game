import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Model = forwardRef(function ({ targetTime, resetTimer, timeTaken }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    show() {
      dialog.current.showModal();
    },
  }));
  const score = Math.round(
    (1 - Math.abs(1000 * targetTime - timeTaken) / (targetTime * 1000)) * 100,
  );

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>Your Score : {score}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer at <strong>{timeTaken / 1000} second.</strong>
      </p>
      <form method="dialog">
        <button onClick={resetTimer}>Close</button>
      </form>
    </dialog>
  );
});
export default Model;
