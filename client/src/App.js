import { Route, Switch } from "react-router-dom";

import Meals from "./components/Meals/Meals";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsMainHeader from "./components/Meals/MealsMainHeader";

const App = () => {
  return (
    <>
      <MealsMainHeader />
      <Switch>
        <Route exact path="/" component={Meals} />
        <AvailableMeals />
      </Switch>
    </>
  );
};

export default App;
