import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "./features/counter/counterSlice";
import { useState } from "react";

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.counter.value);
  const [num, setNum] = useState("");
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(num ==="") return

          dispatch(increaseByAmount(num));

          setNum("")
        }}
      >
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button type="submit">add new number</button>
      </form>
    </>
  );
}

export default Counter;
