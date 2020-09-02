import Dashboard from "./Dashboard";
import Game from "./Game";
import Login from "./Login";
import Register from "./Register";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Navigator = createStackNavigator({
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  },
  Dashboard: {
    screen: Dashboard,
  },
  Game: {
    screen: Game,
  },
});

export default createAppContainer(Navigator);
