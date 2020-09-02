// import React from "react";
// import React, { Component } from "react";
// import { View, StyleSheet } from "react-native";

// import { GiftedChat } from "react-native-gifted-chat";

// import firebase from 'firebase';

// class Chat extends React.Component {

//   static navigationOptions = ({ navigation }) => ({
//     title: (navigation.state.params || {}).name || "Chat!",
//   });

//   state = {
//     messages: [],
//   };

//   render() {
//     return <GiftedChat messages={this.state.messages} />;
//   }
// }

// const styles = StyleSheet.create({});

// export default Chat;

// import React from "react";
// import { View, SafeAreaView } from "react-native";
// import { StreamChat } from "stream-chat";
// import { Chat, Channel, MessageList, MessageInput } from "stream-chat-expo";

// const chatClient = new StreamChat("f8wwud5et5jd");
// const userToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZHJ5LXNoYXBlLTIifQ.H4E4O8bsw6n069mPU4F9Vboqea_w4U6aeJrujJ0HWtk";

// const user = {
//   id: "dry-shape-2",
//   name: "Dry shape",
//   image: "https://getstream.io/random_png/?id=dry-shape-2&amp;name=Dry+shape",
// };

// chatClient.setUser(user, userToken);

// class ChannelScreen extends React.Component {
//   render() {
//     const channel = chatClient.channel("messaging", "dry-shape-2");
//     channel.watch();

//     const gameHandler = () => {
//       navigation.navigate("Game");
//     };
//     const dashHandler = () => {
//       navigation.navigate("Dashboard");
//     };

//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <Channel channel={channel}>
//             <View style={{ display: "flex", height: "100%" }}>
//               <MessageList />
//               <MessageInput />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// export default ChannelScreen;

// OTHER LAYOUT FOR CHAT

import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, Channel, MessageList, MessageInput } from "stream-chat-expo";
import { API_KEY } from "/.env";
import firebase from "./database/firebase";
import { userData } from "./Login";
import AsyncStorage from "@react-native-community/async-storage";

const chatClient = new StreamChat("6sw8bnpu78rx");
// const userToken = userData.accessToken
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZ3JlZW4tc2NlbmUtMyJ9.a7EWHIIpFX7IvvFYY7aZVexrKTtspU1V5r1eu04JBS0";

AsyncStorage.getItem("userName").then((userName) => {
  AsyncStorage.getItem("userToken").then((userToken) => {
    console.log(userName, userToken);
    chatClient.setUser(userName, userToken);
  });
});

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "green-scene-3");
    channel.watch();

    const gameHandler = () => {
      navigation.navigate("Game");
    };
    const dashHandler = () => {
      navigation.navigate("Dashboard");
    };

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <View style={{ display: "flex", height: "100%" }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <ChannelScreen />;
  }
}
