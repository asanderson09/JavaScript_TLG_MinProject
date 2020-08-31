import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const Dashboard = ({ navigation }) => {
  const gameHandler = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Play game"
        onPress={gameHandler}
        style={styles.playButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    backgroundColor: "#008040",
  },
  playButton: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#b3daff",
    color: "#1a001a",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Dashboard;
