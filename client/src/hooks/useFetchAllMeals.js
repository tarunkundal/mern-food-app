import { useEffect } from "react";
import axios from "axios";
import { useMealStore } from "../store/meals/MealProvider";

const useFetchAllMeals = () => {
  const { setMeals } = useMealStore();
  useEffect(() => {
    const getMeals = async () => {
      const res = await axios.get("http://localhost:2000/api/meals/allmeals");
      setMeals(res.data);
    };
    getMeals();
  }, []);
};

export default useFetchAllMeals;
