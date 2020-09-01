import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { Component } from "react";

import Dashboard from "./Dashboard";
import styles from "./PopupStyles";

export default class Pause extends Component {
  render() {
    return (
      <View style={styles.clearScreen}>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Ready?</Text>

          <View style={styles.panelButtonsContainer}>
            <TouchableWithoutFeedback onPress={this.props.onHandleDashboard}>
              <View style={styles.panelButton}>
                <Image
                  style={styles.panelButtonIcon}
                  resizeMode="contain"
                  source={Images.homeIcon}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.props.onReset}>
              <View style={styles.panelButton}>
                <Image
                  style={styles.panelButtonIcon}
                  resizeMode="contain"
                  source={Images.restartIcon}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.props.onResume}>
              <View style={styles.panelButton}>
                <Image
                  style={styles.panelButtonIcon}
                  resizeMode="contain"
                  source={Images.playIcon}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}
