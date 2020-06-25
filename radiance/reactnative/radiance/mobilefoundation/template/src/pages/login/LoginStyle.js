import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#25313c',
    flex: 1,
    paddingLeft: Dimensions.get('screen').width * 0.03
  },
  waveContainerOne: {
    backgroundColor: '#A899FA',
    position: 'absolute',
    right: Dimensions.get('window').width * 0.1,
    bottom: Dimensions.get('window').width * -0.8,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width - 20,
    borderRadius: Dimensions.get('window').width / 2,
    transform: [{ scaleX: 2 }, { rotate: '40deg' }],
    opacity: 0.7
  },
  waveContainerTwo: {
    backgroundColor: '#B8BFE9',
    position: 'absolute',
    left: Dimensions.get('window').width * 0.1,
    bottom: Dimensions.get('window').width * -0.72,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width - 20,
    borderRadius: Dimensions.get('window').width / 2,
    transform: [{ scaleX: 2 }, { rotate: '-30deg' }],
    opacity: 0.5
  },
  waveContainerThree: {
    backgroundColor: '#297d988a',
    position: 'absolute',
    right: Dimensions.get('window').width * 0.1,
    bottom: Dimensions.get('window').width * -0.72,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width - 20,
    borderRadius: Dimensions.get('window').width / 2,
    transform: [{ scaleX: 2 }, { rotate: '-20deg' }],
    opacity: 0.5
  },
  waveContainerFour: {
    backgroundColor: '#3591AE',
    position: 'absolute',
    right: Dimensions.get('window').width * 0.1,
    bottom: Dimensions.get('window').width * -0.72,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width - 20,
    borderRadius: Dimensions.get('window').width / 2,
    transform: [{ scaleX: 2 }, { rotate: '-20deg' }],
    opacity: 0.5
  },
  waveContainerFive: {
    backgroundColor: '#297d98',
    position: 'absolute',
    right: Dimensions.get('window').width * 0.1,
    bottom: Dimensions.get('window').width * -0.72,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width - 20,
    borderRadius: Dimensions.get('window').width / 2,
    transform: [{ scaleX: 2 }, { rotate: '10deg' }],
    opacity: 0.5
  },
  welcomeTextContainer: {
    paddingTop: 90,
    marginBottom: Dimensions.get('screen').height * 0.05
  },
  textContainer: {
    flex: 1,
    zIndex: 2,
    alignItems: 'center'
  },
  textHeading: {
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 2
  },
  logoContainer: {
    width: Dimensions.get('screen').width * 0.22,
    height: Dimensions.get('screen').width * 0.24,
    // elevation: 5,
    // borderRadius: 10,
    // borderColor: '#ffff',
    marginBottom: 10
  },
  logoImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10
  },
  loginFormContainer: {
    flex: 1,
    paddingTop: Dimensions.get('screen').height * 0.05,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center'
  },
  loginInput: {
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: '#dcdcdc',
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 40
  },
  loginButton: {
    marginTop: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.7,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  loginButtonText: {
    fontSize: 20,
    color: '#A899FA',
    textAlign: 'left',
    textTransform: 'uppercase'
  },
  forgotTextContainer: {
    marginTop: Dimensions.get('screen').height * 0.01,
    justifyContent: 'flex-start',
    width: Dimensions.get('screen').width * 0.7
  },
  forgotPwdText: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'left',
    textTransform: 'uppercase'
  }
});

export default styles;
