import { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const [initialItemsAmount, setInitialItemsAmount] = useState(
    props.input.defaultValue
  );

  // console.log(initialItemsAmount)

  const updatedAmountHandler = (e) => {
    setInitialItemsAmount(e.target.value);
    props.mealsQuantity(e.target.value);
  };

  return (
    <>
      <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input
          {...props.input}
          onChange={updatedAmountHandler}
          defaultValue={initialItemsAmount}
        />
      </div>
    </>
  );
};

export default Input;
