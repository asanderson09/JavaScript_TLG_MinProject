import Chat from "./components/Chat";
import ChatScreen from "./screens/ChatScreen";
import Dashboard from "./Dashboard";
import Game from "./Game";
import Login from "./Login";
import LoginScreen from "./screens/LoginScreen";
import Register from "./Register";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Navigator = createStackNavigator({
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
      gesturesEnabled: false,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  Game: {
    screen: Game,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  ChatScreen: {
    screen: ChatScreen,
  },
});

export default createAppContainer(Navigator);
