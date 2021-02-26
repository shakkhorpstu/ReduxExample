import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from './store/actions/index';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.countItem);

  return (
    <div className="App">
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(incrementCounter())}>Increment </button>
      <button onClick={() => dispatch(decrementCounter())}>Deccrement </button>
    </div>
  );
}

export default App;
