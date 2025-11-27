import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/CounterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      &nbsp;&nbsp;
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
