import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    let interval = [];
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  if (seconds === 60) {
    setSeconds(0);
    setMinutes((prev) => prev + 1);
  }
  const Reset = () => {
    setSeconds(0);
    setMinutes(0);
  };
  return (
    <>
      <p>
        {String(minutes).padStart(2, 0)}:{String(seconds).padStart(2, 0)}
      </p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => Reset()}>Reset</button>
    </>
  );
};
