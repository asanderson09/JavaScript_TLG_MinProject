import "react-native-gesture-handler";

import * as Font from "expo-font";

import React, { PureComponent } from "react";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import Navigator from "./nav-stack";

export default class App extends PureComponent {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require("./assets/img/background.png"),
        require("./assets/img/icon_health.png"),
        require("./assets/img/icon_pause.png"),
        require("./assets/img/icon_play.png"),
        require("./assets/img/icon_restart.png"),
      ]),
      Font.loadAsync({
        lilitaOne: require("./assets/fonts/LilitaOne-Regular.ttf"),
      }),
    ]);

  handleLoadingError = (error) => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return <Navigator />;
  }
}
