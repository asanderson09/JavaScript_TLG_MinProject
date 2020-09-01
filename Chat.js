import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, Channel, MessageList, MessageInput } from "stream-chat-expo";

const chatClient = new StreamChat("f8wwud5et5jd");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZHJ5LXNoYXBlLTIifQ.H4E4O8bsw6n069mPU4F9Vboqea_w4U6aeJrujJ0HWtk";

const user = {
  id: "dry-shape-2",
  name: "Dry shape",
  image: "https://getstream.io/random_png/?id=dry-shape-2&amp;name=Dry+shape",
};

chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "dry-shape-2");
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

export default ChannelScreen;
