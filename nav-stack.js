import Chat from "./components/Chat";
import ChatScreen from "./screens/ChatScreen";
import Dashboard from "./Dashboard";
import Game from "./Game";
import Login from "./Login";
import LoginScreen from "./screens/LoginScreen";
import Main from "./components/Main";
import Register from "./Register";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//import Chat from "./Chat";

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
  // Main: {
  //   screen: Main,
  // },
  // Chat: {
  //   screen: Chat,
  // },
  LoginScreen: {
    screen: LoginScreen,
  },
  ChatScreen: {
    screen: ChatScreen,
  },
});

export default createAppContainer(Navigator);
