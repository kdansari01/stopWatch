import { useState } from "react";
import { StopWatch } from "./StopWatch";
import "./styles.css";
import { Timer } from "./Timer";

export function Watch() {
  const [state, setState] = useState(1);

  const togleButton = (index) => {
    setState(index);
  };

  return (
    <div className="App">
      <ul className="nav nav-pills mt-4 m-5 border d-flex justify-content-between">
        <li className="nav-item">
          <button
            className={state === 1 ? "nav-link active" : "nav-link"}
            aria-current="page"
            onClick={() => togleButton(1)}
          >
            Timer
          </button>
        </li>
        <li className="nav-item">
          <button
            className={state === 2 ? "nav-link active" : "nav-link"}
            onClick={() => togleButton(2)}
          >
            Stop Watch
          </button>
        </li>
      </ul>

      <div className={state === 1 ? " active-content" : "content"}>
        <Timer />
      </div>
      <div className={state === 2 ? " active-content" : "content"}>
        <StopWatch />
      </div>
    </div>
  );
}
