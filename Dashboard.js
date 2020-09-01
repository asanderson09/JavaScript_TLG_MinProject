import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Overlay } from "react-native-elements";
import React from "react";

const Dashboard = ({ navigation }) => {
  const gameHandler = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text h1 h1Style={styles.title}>
          Whack-A-Mole
        </Text>
        <Text> </Text>
        <Button
          title="Play game"
          titleStyle={styles.buttonTitle}
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
    backgroundColor: "black",
  },
  playButton: {
    backgroundColor: "red",
    borderRadius: 50,
    width: 200,
    opacity: 0.8,
    margin: 2,
  },
  buttonTitle: {
    color: "white",
    fontSize: 25,
  },
  title: {
    color: "white",
    marginVertical: 20,
    fontSize: 25,
  },
  titleContainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
});

Dashboard.navigationOptions = {
  headerShown: false,
};

export default Dashboard;
