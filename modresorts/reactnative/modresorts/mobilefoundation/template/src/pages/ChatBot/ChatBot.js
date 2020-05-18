import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './ChatBotStyle';
import WatsonChat from '../../../assets/scripts/chat';

class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.url = 'https://gateway-syd.watsonplatform.net/assistant/api';
    this.iam_apikey = '6YhME2v8FtKRhq1z21RJbdO5Onmwf4ViZvX6CvLQp1ht';
    this.workspaceId = '31f6d67c-46ec-4222-9d5a-0a704930ca7b';
    this.watson = new WatsonChat();
    this.watson.init(this.url, this.iam_apikey, this.workspaceId, true);

    this.state = {
      messages: [],
      chatInput: ''
    };
  }

  sendMessage = () => {
    let timeNowInputMsg = new Date().toLocaleTimeString();
    timeNowInputMsg = timeNowInputMsg.substr(
      0,
      timeNowInputMsg.lastIndexOf(':')
    );
    const inputMsgTime = this.watson.convertTimeToAMPM(timeNowInputMsg);
    const messages = this.state.messages.slice();
    messages.push(
      Object.assign(
        {},
        { msg: this.state.chatInput, isWatson: false, time: inputMsgTime }
      )
    );
    this.setState(
      {
        messages: messages
      },
      () => {
        this.watson.sendMessage(
          this.state.messages,
          this.state.chatInput,
          (err, msgs) => {
            if (msgs) {
              this.setState({
                messages: msgs,
                chatInput: ''
              });
            }
          }
        );
      }
    );
  };

  renderMessages = () => {
    const renderMessages = [];
    this.state.messages.map((message, index) => {
      if (message.isWatson) {
        renderMessages.push(
          <View style={styles.userMsgContainer}>
            <View style={styles.botImgContainer}>
              <Image
                source={require('../../../assets/images/bot.png')}
                style={styles.botImage}
              />
            </View>
            <View style={styles.userMsgWrapper}>
              <View style={styles.userMsg}>
                <Text style={styles.userChatboxHead}>BOT</Text>
                <Text style={styles.userChatText}>{message.msg}</Text>
              </View>
              <Text style={styles.botMsgTime}>{message.time}</Text>
            </View>
          </View>
        );
      } else {
        renderMessages.push(
          <View style={styles.botMsg}>
            <Text style={styles.botChatText}>{message.msg}</Text>
          </View>
        );
      }
    });
    return renderMessages;
  };
  render() {
    return (
      <>
        <View style={styles.parent}>
          <StatusBar backgroundColor="#141b21" />
          <View style={styles.chatContainer}>
            <ScrollView style={styles.msgContainer}>
              {this.renderMessages()}
            </ScrollView>
          </View>
          <View style={styles.inputBoxContainer}>
            <TextInput
              placeholder={'Your message here..'}
              placeholderTextColor="#fff"
              style={styles.chatboxTextInput}
              onChangeText={text => this.setState({ chatInput: text })}
              value={this.state.chatInput}
            />
            <TouchableOpacity
              onPress={() => {
                this.sendMessage();
              }}
            >
              <View style={styles.sendImage}>
                <Image
                  source={require('../../../assets/images/send.png')}
                  style={styles.sendImg}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default ChatBot;
