import { useEffect } from "react";
import axios, { AxiosHeaders } from "axios";
import { useMealStore } from "../store/meals/MealProvider";

const useFetchAllMeals = () => {
  const { setMeals } = useMealStore();
  // useEffect(() => {
  //   const getMeals = async () => {
  //     const res = await axios.get("http://localhost:2000/api/meals/allmeals");
  //     console.log(res);
  //     // setMeals(res.data);
  //   };
  //   getMeals();
  // }, []);

  const fetchMeal = async () => {
    const res = await fetch("http://localhost:1000/api/meals/allmeals");
    const data = await res.json();
    console.log(data);
  };
  fetchMeal();
};

export default useFetchAllMeals;
