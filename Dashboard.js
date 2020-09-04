import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React from "react";
import firebase from "./database/firebase";

const Dashboard = ({ navigation }) => {
  const gameHandler = () => {
    navigation.navigate("Game");
  };
  const chatHandler = () => {
    navigation.navigate("LoginScreen");
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.push("Login");
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text h1 style={styles.title}>
          Chat-A-Mole
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.playButton}
          titleStyle={styles.buttonTitle}
          onPress={gameHandler}
          //buttonStyle={styles.playButton}
        >
          <Text style={styles.text}>Play Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          titleStyle={styles.buttonTitle}
          onPress={chatHandler}
          style={styles.chatButton}
        >
          <Text style={styles.text}>Chat-It-Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          titleStyle={styles.buttonTitle}
          onPress={signOut}
          style={styles.signOutButton}
        >
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "black",
  },
  playButton: {
    marginRight: 200,
    backgroundColor: "lime",
    borderRadius: 50,
    width: 150,
    height: 50,
    opacity: 0.8,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  chatButton: {
    marginLeft: 100,
    backgroundColor: "teal",
    borderRadius: 50,
    width: 150,
    height: 50,
    opacity: 0.8,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  signOutButton: {
    marginLeft: 200,
    backgroundColor: "red",
    borderRadius: 50,
    width: 150,
    height: 50,
    opacity: 0.8,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    marginVertical: 100,
    fontSize: 50,
  },
  titleContainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

Dashboard.navigationOptions = {
  headerShown: false,
};

export default Dashboard;
