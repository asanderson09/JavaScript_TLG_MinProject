import Dashboard from "./Dashboard";
import Game from "./Game";
import Login from "./Login";
import Register from "./Register";
//import Chat from "./Chat";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./components/Main";
import Chat from "./components/Chat";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";

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
