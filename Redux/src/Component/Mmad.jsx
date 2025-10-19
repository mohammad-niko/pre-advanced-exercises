import { useDispatch, useSelector } from "react-redux";
import {
  incrementAction,
  decrementAction,
} from "../Redux/Reducer/conterAction";
function Mmad() {
  const data = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(incrementAction())}>+</button>
      <div>{data}</div>
      <button onClick={() => dispatch(decrementAction())}>-</button>
    </>
  );
}

export default Mmad;
