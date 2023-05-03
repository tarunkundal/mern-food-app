import { Center, Heading } from "@chakra-ui/react";
import { useMealStore } from "../../../store/meals/MealProvider";
import MealItem from "../MealItem/MealItem";
import { useState } from "react";
import LoadMoreButton from "../../UI/LoadMoreButton";

const initialMealsToShow = 3;

const NortIndian = () => {
  const { meals } = useMealStore();
  const [showMeals, setShowMeals] = useState(initialMealsToShow);

  const nortMeals = meals.filter((meal) => meal.category === "north indian");
  const handleMoreMeals = () => {
    setShowMeals(showMeals + initialMealsToShow);
  };
  return (
    <>
      <Center>
        <Heading my={5}>Nort Indian Meals</Heading>
      </Center>
      {nortMeals.slice(0, showMeals).map((meal) => {
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
      {nortMeals.length > showMeals && (
        <LoadMoreButton onClick={handleMoreMeals} />
      )}
    </>
  );
};

export default NortIndian;
