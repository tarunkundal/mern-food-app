import Home from "../Home/Home";
import MealHeader from "./mealHeader/MealHeader";
import RandomMeals from "./mealsByCategory/RamdomMeals";

const Meals = () => {
  return (
    <>
      <MealHeader />
      <Home />
      <RandomMeals />
    </>
  );
};
export default Meals;
