import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, switcher } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(switcher())}>
        {isLogged ? "hide" : "show"}
      </button>
      {isLogged && <h3>Valuable information i shouldn't see</h3>}
    </div>
  );
}

export default App;
