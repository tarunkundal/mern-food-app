import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueIsInvalid = !enteredValue && isTouched;

  const valueChangeHandler = (e) => {
    setEnterdValue(e.target.value);
  };
  const blurChangeHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    setEnterdValue,
    valueIsValid,
    valueIsInvalid,
    valueChangeHandler,
    blurChangeHandler,
    setIsTouched,
  };
};
export default useInput;
