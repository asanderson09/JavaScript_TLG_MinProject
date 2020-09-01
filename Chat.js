import React, { PureComponent } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  ChannelPreviewMessenger,
  ChannelList,
} from "stream-chat-expo";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const chatClient = new StreamChat("f8wwud5et5jd");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZHJ5LXNoYXBlLTIifQ.H4E4O8bsw6n069mPU4F9Vboqea_w4U6aeJrujJ0HWtk";

const user = {
  id: "dry-shape-2",
  name: "Dry shape",
  image: "https://getstream.io/random_png/?id=dry-shape-2&amp;name=Dry+shape",
};

chatClient.setUser(user, userToken);

class ChannelListScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: (
      <Text style={{ fontWeight: "bold" }}>Awesome Conversations</Text>
    ),
  });

  render() {
    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <View style={{ display: "flex", height: "100%", padding: 10 }}>
            <ChannelList
              filters={{ type: "messaging", members: { $in: ["dry-shape-2"] } }}
              sort={{ last_message_at: -1 }}
              Preview={ChannelPreviewMessenger}
              onSelect={(channel) => {
                this.props.navigation.navigate("Channel", {
                  channel,
                });
              }}
            />
          </View>
        </Chat>
      </SafeAreaView>
    );
  }
}

class ChannelScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const channel = navigation.getParam("channel");
    return {
      headerTitle: (
        <Text style={{ fontWeight: "bold" }}>{channel.data.name}</Text>
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    const channel = navigation.getParam("channel");

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel client={chatClient} channel={channel}>
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

const RootStack = createStackNavigator(
  {
    ChannelList: {
      screen: ChannelListScreen,
    },
    Channel: {
      screen: ChannelScreen,
    },
  },
  {
    initialRouteName: "ChannelList",
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
