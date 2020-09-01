import Dashboard from "./Dashboard";
import Game from "./Game";
import GameOver from "./GameOver";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./Login";

const Navigator = createStackNavigator({
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
