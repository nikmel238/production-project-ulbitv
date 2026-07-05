import {useState} from "react";
import classes from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);


  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div className={classes.btn}>
      <h1>{counter}</h1>
      <button onClick={increment} type = "button">
        Нажми
      </button>
    </div>
  );
};

export default Counter;