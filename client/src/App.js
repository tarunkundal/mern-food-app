import { Route, Switch } from "react-router-dom";

import Meals from "./components/Meals/Meals";
import AvailableMeals from "./components/Meals/AvailableMeals";
import SignIN from "./components/auth/Signin";
import Home from "./components/auth/Home/Home";
import Routes from "./routes/Routes";
import SignUp from "./components/auth/Signup";

const App = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={Routes.SIGNIN} exact component={SignIN} />
      <Route path={Routes.SIGNUP} exact component={SignUp} />

      <Route path={Routes.HOME} exact component={Meals} />
      <AvailableMeals />
    </Switch>
  );
};

export default App;
