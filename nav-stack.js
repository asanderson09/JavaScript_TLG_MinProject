import Dashboard from "./Dashboard";
import Game from "./Game";
import GameOver from "./GameOver";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Navigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Game: {
    screen: Game,
  },
});

export default createAppContainer(Navigator);
