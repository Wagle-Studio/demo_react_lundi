import { useState } from "react";
import { CounterScore } from "./CounterScore";
import { CounterDecrement } from "./CounterDecrement";
import { CounterIncrement } from "./CounterIncrement";
import "./counter.css";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
      <CounterScore count={count} />
      <div className="counter__actions">
        <CounterDecrement count={count} setCount={setCount} />
        <CounterIncrement count={count} setCount={setCount} />
      </div>
    </div>
  );
};
