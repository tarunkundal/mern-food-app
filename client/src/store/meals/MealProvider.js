import { useContext, useReducer } from "react";
import MealContext from "./meal-context";

const defaultMealsState = {
  meals: [],
};

const reducer = (state, action) => {
  if (action.type === "SET_MEALS") {
    return { ...state, meals: action.meals };
  }
  return defaultMealsState;
};

const MealProvider = (props) => {
  const [mealsState, dispatchMealsAction] = useReducer(
    reducer,
    defaultMealsState
  );

  // set meals
  const setMealsHandler = (meals) => {
    dispatchMealsAction({ type: "SET_MEALS", meals: meals });
  };

  const mealsContext = {
    meals: mealsState.meals,
    setMeals: setMealsHandler,
  };

  return (
    <MealContext.Provider value={mealsContext}>
      {props.children}
    </MealContext.Provider>
  );
};

export const useMealStore = () => {
  const context = useContext(MealContext);
  return context;
};

export default MealProvider;
