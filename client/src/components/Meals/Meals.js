import MealFilters from "../MealFilters";
import MealsMainHeader from "./MealsMainHeader";
import MealHeader from "./mealHeader/MealHeader";
import RandomMeals from "./mealsByCategory/RamdomMeals";

const Meals = () => {
  return (
    <>
      <MealsMainHeader />
      <MealHeader />
      <MealFilters />
      <RandomMeals />
    </>
  );
};
export default Meals;
