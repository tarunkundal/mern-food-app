import { Switch, Route } from "react-router-dom";
import useFetchAllMeals from "../../hooks/useFetchAllMeals";
import Sweets from "./mealsByCategory/Sweets";
import FastFood from "./mealsByCategory/FastFood";
import StreetFood from "./mealsByCategory/StreetFood";
import NortIndian from "./mealsByCategory/NorthIndian";
import SouthIndian from "./mealsByCategory/SouthIndian";
import Header from "../Layout/Header";

const AvailableMeals = () => {
  useFetchAllMeals();

  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route path={"/sweet"} exact component={Sweets} />
        <Route path={"/fast food"} exact component={FastFood} />
        <Route path={"/street food"} exact component={StreetFood} />
        <Route path={"/north indian"} exact component={NortIndian} />
        <Route path={"/south indian"} exact component={SouthIndian} />
      </Switch>
    </>
  );
};

export default AvailableMeals;
