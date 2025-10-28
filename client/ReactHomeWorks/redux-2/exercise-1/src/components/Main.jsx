import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from '../Redux/action/action';

function Main() {
const num = useSelector((store) =>store.counter);
const dispatch = useDispatch()

  function handleIncrement() {
    dispatch(incrementAction())
  }


  function handleDecrement() {
    dispatch(decrementAction())
  }

    function handleReset() {
    dispatch(resetAction())
  }


  return (
    <section className="container">
      <div className="pareant-of-h1">
        <h1>{num}</h1>
      </div>
      <div className="pareant-of-btns">
        <Button variant="primary" onClick={handleIncrement}>
          increment
        </Button>
        <Button variant="danger" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button variant="light" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </section>
  );
}

export default Main;
