import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const Dashboard = ({ navigation }) => {
  const gameHandler = () => {
    console.log(this.props.email);
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Whack-A-Mole</Text>
      </View>
      <View>
        <Button
          title="Play game"
          onPress={gameHandler}
          buttonStyle={styles.playButton}
        />
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
  playButton: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    width: 200,
    opacity: 0.8,
    margin: 2,
  },
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
});

Dashboard.navigationOptions = {
  headerShown: false,
};

export default Dashboard;
