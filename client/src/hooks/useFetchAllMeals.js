import { useEffect } from "react";
import axios from "axios";
import { useMealStore } from "../store/meals/MealProvider";

const useFetchAllMeals = () => {
  const { setMeals } = useMealStore();
  useEffect(() => {
    const getMeals = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5050/api/meals/allmeals",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        const data = await res.json();

        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMeals();
  }, []);
};

export default useFetchAllMeals;
