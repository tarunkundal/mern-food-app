import { Route, Switch } from "react-router-dom";

import Meals from "./components/Meals/Meals";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Home from "./Screens/Home/index";
import Routes from "./routes/Routes";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";

const App = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={Routes.SIGNIN} exact component={SignIn} />
      <Route path={Routes.SIGNUP} exact component={SignUp} />

      <Route path={Routes.HOME} exact component={Meals} />
      <AvailableMeals />
    </Switch>
  );
};

export default App;
