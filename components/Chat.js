import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../Fire";

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name"),
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      //returns name and UID to be parsed by GiftedChat
      name: this.props.navigation.getParam("name"),
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    Fire.shared.on((message) =>
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    //when leaving the screen we "unsubscribe" from the data base
    Fire.shared.off();
  }
}

const styles = StyleSheet.create({});

export default Chat;
