import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#2d3c42',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  chatHead: {
    height: Dimensions.get('window').height * 0.12,
    // height: 80,
    width: '100%',
    backgroundColor: '#25313c',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatHeadText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  chatContainer: {
    height: Dimensions.get('window').height * 0.75,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 20
  },
  msgContainer: {
    width: '100%',
    zIndex: 2,
    backgroundColor: '#2d3c42'
  },
  userChatboxHead: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#484848'
  },
  botChatboxHead: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
  userChatText: {
    color: '#353535'
  },
  botChatText: {
    color: '#fcfcfc'
  },
  userMsgContainer: {
    flexDirection: 'row',
    paddingLeft: 10
  },
  userMsgWrapper: {
    marginBottom: 20,
    justifyContent: 'flex-end'
  },
  userMsg: {
    maxWidth: '70%',
    backgroundColor: '#B8BFE9',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    alignSelf: 'flex-start',
    marginLeft: 10,
    zIndex: 1,
    elevation: 5
  },
  botMsgTime: {
    marginTop: 10,
    color: '#fff',
    marginLeft: 10
  },
  botMsg: {
    alignSelf: 'flex-end',
    maxWidth: '70%',
    backgroundColor: '#4ba1bded',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    marginBottom: 20,
    marginRight: 10,
    zIndex: 1,
    elevation: 5
  },
  inputBoxContainer: {
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: '#394f5f',
    marginTop: 10,
    width: '90%',
    elevation: 8,
    padding: 10,
    borderRadius: 40,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatboxTextInput: {
    fontSize: 15,
    color: '#ffffff',
    width: '80%'
  },
  botImgContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    bottom: 10
  },
  botImage: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  sendImage: {
    borderRadius: 25,
    padding: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A899FA'
  },
  sendImg: {
    width: 25,
    height: 25
  }
});

export default styles;
