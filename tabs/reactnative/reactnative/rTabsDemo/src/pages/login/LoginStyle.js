import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingLeft: Dimensions.get('screen').width * 0.03
  },
  welcomeTextContainer: {
    paddingTop: 10
  },
  skewContainer: {
    backgroundColor: '#5c258d',
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width + 100,
    position: 'absolute',
    left: Dimensions.get('window').width * -0.2,
    top: Dimensions.get('window').height * -0.1,
    transform: [{ rotateZ: '-20deg' }],
    opacity: 0.5
  },
  skewContainerTwo: {
    backgroundColor: '#4389a2',
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width + 100,
    position: 'absolute',
    left: Dimensions.get('window').width * -0.1,
    top: Dimensions.get('window').height * -0.16,
    transform: [{ rotateZ: '15deg' }],
    opacity: 0.5
  },
  textContainer: {
    flex: 1,
    zIndex: 2,
    paddingTop: Dimensions.get('window').height * 0.22,
    alignItems: 'center'
  },
  textHeading: {
    color: '#484848',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 2
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
    width: '80%',
    fontSize: 18,
    borderRadius: 4,
    padding: Dimensions.get('screen').height * 0.02,
    backgroundColor: '#e6e6e6',
    marginBottom: Dimensions.get('screen').height * 0.03
  },
  loginButton: {
    marginTop: Dimensions.get('screen').height * 0.04,
    elevation: 5,
    width: Dimensions.get('screen').width * 0.8,
    padding: Dimensions.get('screen').height * 0.02,
    backgroundColor: '#827ffe',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  loginButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  forgotTextContainer: {
    marginTop: Dimensions.get('screen').height * 0.001,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  forgotPwdText: {
    fontSize: 15,
    color: '#333c46',
    textAlign: 'right'
  }
});

export default styles;
