import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";

const Login = ({ navigation }) => {
  const gameHandler = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Whack-A-Mole</Text>
      </View>
      <View>
        <Button
          title="LOG IN"
          onPress={gameHandler}
          // buttonStyle={styles.playButton}
        />
      </View>

      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#8ceb07",
  },
  button: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    width: 200,
    opacity: 0.8,
    margin: 2,
  },
  // playButton: {
  //   backgroundColor: "#FFF",
  //   borderRadius: 50,
  //   width: 200,
  //   opacity: 0.8,
  //   margin: 2,
  // },
  buttonTitle: {
    color: "#BB1F13",
    fontSize: 25,
  },
  title: {
    color: "#FFF",
    marginVertical: 20,
  },
  titleContainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  highScore: {
    color: "red",
    fontSize: 18,
  },
  input: {
    padding: 20,
    height: 60,
    marginBottom: 20,
  },
});

Login.navigationOptions = {
  headerShown: false,
};

export default Login;
