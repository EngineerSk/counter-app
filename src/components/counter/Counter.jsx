import { useState } from "react";
import "./Counter.css";
import CounterButton from "../counter-button/CounterButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementMethodInParent(by) {
    if (count < Number.MAX_VALUE && count <= Number.MAX_VALUE - by)
      setCount(count + by);
  }

  function decrementMethodInParent(by) {
    if (count > 0 && count >= by) setCount(count - by);
  }

  function resetMethodInParent() {
    setCount(0);
  }

  // function someMethodInParent() {
  //   console.log("parent method called...");
  // }
  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton
        incrementMethod={incrementMethodInParent}
        decrementMethod={decrementMethodInParent}
      />
      <CounterButton
        by={2}
        incrementMethod={incrementMethodInParent}
        decrementMethod={decrementMethodInParent}
      />
      <CounterButton
        by={5}
        incrementMethod={incrementMethodInParent}
        decrementMethod={decrementMethodInParent}
      />

      <button className="resetButton" onClick={resetMethodInParent}>
        reset
      </button>
    </>
  );
}
