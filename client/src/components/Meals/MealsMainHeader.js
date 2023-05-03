import { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
import MealsSummary from "./MealsSummary";

const MealsMainHeader = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
    </>
  );
};

export default MealsMainHeader;
