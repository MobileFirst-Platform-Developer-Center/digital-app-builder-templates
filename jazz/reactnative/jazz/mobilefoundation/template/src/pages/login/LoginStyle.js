import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  skewContainer: {
    position: 'absolute',
    left: -150,
    top: -Dimensions.get('window').height * 0.47,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    backgroundColor: '#FF9E7B',
    zIndex: 1
  },
  skewContainerTwo: {
    backgroundColor: '#E9446A',
    position: 'absolute',
    right: -150,
    top: -Dimensions.get('window').height * 0.4,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    zIndex: 1
  },
  welcomeTextContainer: {
    // flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  textContainer: {
    flex: 1,
    zIndex: 2,
    paddingLeft: Dimensions.get('window').width * 0.02,
    paddingTop: Dimensions.get('window').height * 0.13,
    alignItems: 'center'
  },
  textHeading: {
    color: '#484848',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 2
  },
  textSubHeading: {
    color: '#484848',
    fontSize: 20,
    textAlign: 'left'
  },
  logoContainer: {
    width: Dimensions.get('screen').width * 0.22,
    height: Dimensions.get('screen').width * 0.24,
    elevation: 5,
    borderRadius: 10,
    borderColor: '#ffff',
    marginBottom: 10
    // padding: 10,
  },
  logoImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10
  },
  loginFormContainer: {
    flex: 1,
    paddingTop: Dimensions.get('screen').height * 0.1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  loginInput: {
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: '#dcdcdc',
    fontSize: 18,
    marginBottom: 30
  },
  loginButton: {
    marginTop: Dimensions.get('screen').height * 0.07,
    elevation: 5,
    width:
      Dimensions.get('screen').width - Dimensions.get('screen').width * 0.2,
    padding: Dimensions.get('screen').height * 0.015,
    backgroundColor: '#E9446A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  loginButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center'
  },
  forgotTextContainer: {
    marginTop: Dimensions.get('screen').height * 0.04,
    justifyContent: 'center'
  },
  forgotPwdText: {
    fontSize: 15,
    color: '#E9446A',
    textAlign: 'center'
  }
});

export default styles;
