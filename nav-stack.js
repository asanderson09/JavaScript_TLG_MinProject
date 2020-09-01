import Dashboard from "./Dashboard";
import Game from "./Game";
import Chat from "./Chat";
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
  Chat: {
    screen: Chat,
  },
});

export default createAppContainer(Navigator);
