import useInput from "./use-input";

import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const nameData = useInput((value) => value.trim() !== "");
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    valueIsInvalid: enteredNameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    blurChangeHandler: nameBlurHandler,
    setIsTouched: setNameIsTouched,
    setEnterdValue: setEnteredName,
  } = nameData;

  const streetData = useInput((value) => value.trim() !== "");
  const {
    value: enteredStreet,
    valueIsValid: enteredStreetIsValid,
    valueIsInvalid: enteredStreetIsInvalid,
    valueChangeHandler: streetChangeHandler,
    blurChangeHandler: streetBlurHandler,
    setIsTouched: setStreetIsTouched,
    setEnterdValue: setEnteredStreet,
  } = streetData;

  const postalData = useInput((value) => value.trim().length === 6);
  const {
    value: enteredPostal,
    valueIsValid: enteredPostalIsValid,
    valueIsInvalid: enteredPostalIsInvalid,
    valueChangeHandler: postalChangeHandler,
    blurChangeHandler: postalBlurHandler,
    setIsTouched: setPostalIsTouched,
    setEnterdValue: setEnteredPostal,
  } = postalData;

  const cityData = useInput((value) => value.trim() !== "");
  const {
    value: enteredCity,
    valueIsValid: enteredCityIsValid,
    valueIsInvalid: enteredCityIsInvalid,
    valueChangeHandler: cityChangeHandler,
    blurChangeHandler: cityBlurHandler,
    setIsTouched: setCityIsTouched,
    setEnterdValue: setEnteredCity,
  } = cityData;

  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (e) => {
    e.preventDefault();
    setNameIsTouched(true);
    setStreetIsTouched(true);
    setPostalIsTouched(true);
    setCityIsTouched(true);

    if (!formIsValid) {
      return;
    }

    const UserData = {
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredCity,
      city: enteredCity,
    };

    props.onOrderConfirm(UserData);

    setNameIsTouched(false);
    setEnteredName("");
    setStreetIsTouched(false);
    setEnteredStreet("");
    setPostalIsTouched(false);
    setEnteredPostal("");
    setCityIsTouched(false);
    setEnteredCity("");
  };

  const cancleCheckoutHandler = () => {
    props.onCancel();
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          enteredNameIsInvalid ? styles.invalid : ""
        } `}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type={"text"}
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {enteredNameIsInvalid && <p>Enter Name</p>}
      </div>
      <div
        className={`${styles.control} ${
          enteredStreetIsInvalid ? styles.invalid : ""
        } `}
      >
        <label htmlFor="street">Street</label>
        <input
          type={"text"}
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {enteredStreetIsInvalid && <p>Enter Street</p>}
      </div>
      <div
        className={`${styles.control} ${
          enteredPostalIsInvalid ? styles.invalid : ""
        } `}
      >
        <label htmlFor="postal">Postal(Pin) Code </label>
        <input
          type={"text"}
          maxLength={6}
          id="postal"
          value={enteredPostal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {enteredPostalIsInvalid && <p>Enter Valid Pin-Code 6-digit</p>}
      </div>
      <div
        className={`${styles.control} ${
          enteredCityIsInvalid ? styles.invalid : ""
        } `}
      >
        <label htmlFor="city">City</label>
        <input
          type={"text"}
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {enteredCityIsInvalid && <p>Enter City</p>}
      </div>
      <div className={styles.actions}>
        <button onClick={cancleCheckoutHandler} type="button">
          Cancle
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
