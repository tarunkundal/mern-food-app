import { Center, Heading } from "@chakra-ui/react";
import { useMealStore } from "../../../store/meals/MealProvider";
import MealItem from "../MealItem/MealItem";
import { useState } from "react";
import LoadMoreButton from "../../UI/LoadMoreButton";

const initialMealsToShow = 3;

const StreetFood = () => {
  const { meals } = useMealStore();
  const [showMeals, setShowMeals] = useState(initialMealsToShow);
  const streetFoods = meals.filter((meal) => meal.category === "street food");

  const handleMoreMeals = () => {
    setShowMeals(showMeals + initialMealsToShow);
  };

  return (
    <>
      <Center>
        <Heading my={5}>Street Foods</Heading>
      </Center>
      {streetFoods.slice(0, showMeals).map((meal) => {
        return (
          <MealItem
            key={meal._id}
            name={meal.name}
            descripition={meal.descripition}
            price={meal.price}
            id={meal._id}
            image={meal.images[0].url}
            category={meal.category}
          />
        );
      })}
      {streetFoods.length > showMeals && (
        <LoadMoreButton onClick={handleMoreMeals} />
      )}
    </>
  );
};

export default StreetFood;
