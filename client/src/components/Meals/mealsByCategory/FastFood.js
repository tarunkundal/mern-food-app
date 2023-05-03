import { Center, Heading } from "@chakra-ui/react";
import { useMealStore } from "../../../store/meals/MealProvider";
import MealItem from "../MealItem/MealItem";
import LoadMoreButton from "../../UI/LoadMoreButton";
import { useState } from "react";

const initialMealsToShow = 3;

const FastFood = () => {
  const { meals } = useMealStore();
  const [showMeals, setShowMeals] = useState(initialMealsToShow);

  const fastFoods = meals.filter((meal) => meal.category === "fast food");

  const handleMoreMeals = () => {
    setShowMeals(showMeals + initialMealsToShow);
  };

  return (
    <>
      <Center>
        <Heading my={5}>Fast Foods</Heading>
      </Center>
      {fastFoods.slice(0, showMeals).map((meal) => {
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
      {fastFoods.length > showMeals && (
        <LoadMoreButton onClick={handleMoreMeals} />
      )}
    </>
  );
};

export default FastFood;
