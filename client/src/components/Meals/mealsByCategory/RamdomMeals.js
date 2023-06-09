import { Center, Heading } from "@chakra-ui/react";
import { useMealStore } from "../../../store/meals/MealProvider";
import MealItem from "../MealItem/MealItem";
import useFetchAllMeals from "../../../hooks/useFetchAllMeals";

const RandomMeals = () => {
  useFetchAllMeals();
  const { meals } = useMealStore();
  const northMeals = meals
    .filter((meal) => meal.category === "north indian")
    .slice(0, 2);
  const southMeals = meals
    .filter((meal) => meal.category === "south indian")
    .slice(0, 2);
  const streetFood = meals
    .filter((meal) => meal.category === "street food")
    .slice(0, 2);
  const fastFood = meals
    .filter((meal) => meal.category === "fast food")
    .slice(0, 2);
  const sweets = meals.filter((meal) => meal.category === "sweet").slice(0, 2);

  const allMeals = []
    .concat(northMeals)
    .concat(southMeals)
    .concat(streetFood)
    .concat(fastFood)
    .concat(sweets);

  return (
    <>
      <Center my={{ base: "3", md: "7" }}>
        <Heading fontFamily={"Open Sans"} color={"brown"}>
          Your Favourite Meals are here
        </Heading>
      </Center>
      {allMeals.map((meal) => {
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
    </>
  );
};

export default RandomMeals;
