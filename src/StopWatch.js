import { useEffect, useState } from "react";

export const StopWatch = () => {
  const [miliseconds, setMililSeconds] = useState(0);
  const [minutes, setMinuts] = useState(0);
  const [hours, setHours] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = [];
    if (running) {
      interval = setInterval(() => {
        setMililSeconds((prev) => prev + 10);
      }, 100);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  if (miliseconds === 100) {
    setMililSeconds(0);
    setMinuts((prev) => prev + 1);
  }
  if (minutes === 60) {
    setHours((prev) => prev + 1);
  }

  const Reset = () => {
    setMililSeconds(0);
    setMinuts(0);
    setHours(0);
  };
  return (
    <>
      <p>
        {String(hours).padStart(2, 0)}:{String(minutes).padStart(2, 0)}:
        {String(miliseconds).padStart(2, 0)}
      </p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => Reset()}>Reset</button>
    </>
  );
};
