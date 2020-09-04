import {
  ActivityIndicator,
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { Component } from "react";

import firebase from "./database/firebase";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      emailError: "",
      email: "",
      passwordError: "",
      password: "",
      isLoading: false,
      errorMessage: "",
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      this.setState({ isLoading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log("User registered successfully!");
          this.props.navigation.navigate("Dashboard");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  emailValidator = () => {
    if (this.state.email === "") {
      this.setState({ emailError: "can not be empty" });
    } else {
      this.setState({ emailError: "" });
    }
  };

  passwordValidator = () => {
    // let alphNum = /^[0-9a-zA-Z]+$/;
    if (this.state.password === "") {
      this.setState({ passwordError: "can not be empty" });
    } else if (this.state.password.length < 8) {
      this.setState({
        passwordError: "must be more than 8 characters",
      });
      // check if password is alphanumeric
    } else if (this.state.password.valueOf().match(/^[0-9a-zA-Z]+$/)) {
      this.setState({ passwordError: "must be alphanumeric" });
    } else if (
      this.state.password === this.state.password.toLowerCase() ||
      this.state.password === this.state.password.toUpperCase()
    ) {
      this.setState({
        passwordError: "must contain at least 1 uppercase and lowercase letter",
      });
    } else {
      this.setState({
        passwordError: "",
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={{ color: "red", marginLeft: 20 }}>
            {this.state.errorMessage}
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, "displayName")}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={this.state.email}
            onBlur={() => this.emailValidator()}
            onChangeText={(val) => this.updateInputVal(val, "email")}
            keyboardType="email-address"
          />
          <Text style={{ color: "red", marginLeft: 20 }}>
            {this.state.emailError}
          </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, "password")}
            maxLength={15}
            onBlur={() => this.passwordValidator()}
            secureTextEntry={true}
          />
          <Text style={{ color: "red", marginLeft: 20 }}>
            {this.state.passwordError}
          </Text>
          <Button
            color="#3740FE"
            title="Signup"
            onPress={() => this.registerUser()}
          />
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Already Registered? Click here to login
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#3740FE",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
