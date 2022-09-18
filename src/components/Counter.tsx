import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const add = () => {
    setCount((prev) => (prev += 1));
  };

  return (
    <div>
      <h1 className={styles.lol}>{count}</h1>
      <button className={styles.green} onClick={add}>
        Add
      </button>
    </div>
  );
};

export default Counter;
