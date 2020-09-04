import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default class LoginScreen extends React.Component {
  state = {
    name: "",
  };

  continue = () => {
    this.props.navigation.navigate("ChatScreen", { name: this.state.name });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.circle} />
          <View style={{ marginTop: 64 }}>
            <Image
              source={require("../assets/chat.png")}
              style={{ width: 100, height: 100, alignSelf: "center" }}
            />
          </View>
          <View style={{ marginHorizontal: 32 }}>
            <Text style={styles.header}>Let's Chat</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your alias"
              onChangeText={(name) => {
                this.setState({ name });
              }}
              value={this.state.name}
            />
            <View style={{ alignItems: "flex-end", marginTop: 64 }}>
              <TouchableOpacity style={styles.continue} onPress={this.continue}>
                <Ionicons
                  name="md-arrow-round-forward"
                  size={24}
                  color="#FFF"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#146EB4",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FF9900",
    position: "absolute",
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: "800",
    fontSize: 40,
    color: "black",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "red",
    fontWeight: "600",
  },
  continue: {
    marginTop: 20,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
