import { createContext } from "react";

const MealContext = createContext({
  meals: [],
  setMeals: (meals) => {},
});

export default MealContext;
