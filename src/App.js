import { useState } from "react";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setstep] = useState(0);
  const [count, setCount] = useState(0);
  function stepMinus() {
    setstep((s) => s - 1);
    // console.log(step);
  }
  function stepPlus() {
    setstep((s) => s + 1);
    // console.log(step);
  }
  function countMinus() {
    setCount((s) => s - step);
  }
  function countPlus() {
    // console.log(count);
    setCount((s) => s + step);
    // console.log(count);
  }
  return (
    <div>
      <div>
        <button onClick={stepMinus}>-</button>
        step: {step}
        <button onClick={stepPlus}>+</button>
      </div>
      <div>
        <button onClick={countMinus}>-</button>
        count:{count}
        <button onClick={countPlus}>+</button>
      </div>
      <Tarik count={count} />
    </div>
  );
}
function Tarik(props) {
  let x = new Date();
  // let year = Date.getFullYear();
  // console.log(x);
  if (props.count === 0) {
    return <div>Today is {x.toDateString()}</div>;
  } else if (props.count === -1) {
    return (
      <div>
        {Math.abs(props.count)} day ago was{" "}
        {x.toDateString(x.setDate(x.getDate() + props.count))}
      </div>
    );
  } else if (props.count < 0) {
    return (
      <div>
        {Math.abs(props.count)} days ago was{" "}
        {x.toDateString(x.setDate(x.getDate() + props.count))}
      </div>
      // console.log(x.getDate());
    );
  } else {
    return (
      <div>
        {props.count} days from today is{" "}
        {x.toDateString(x.setDate(x.getDate() + props.count))}
      </div>
    );
  }
}
