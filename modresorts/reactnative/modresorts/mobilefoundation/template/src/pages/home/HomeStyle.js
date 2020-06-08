import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height //for full screen
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  scrollView: {
    height: '100%'
  },
  body: {
    flex: 1,
    height: '100%',
    alignItems: 'center'
  },
  image: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%'
  },
  img: {
    height: '69%',
    width: '54%'
  },
  login: {
    alignSelf: 'center',
    backgroundColor: '#35354b',
    marginTop: '17%',
    width: '85%',
    height: '70%',
    shadowColor: '#3e3f52',
    alignItems: 'center',
    paddingTop: '5%'
  },
  input: {
    margin: '8%',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff'
  },
  loginButton: {
    backgroundColor: '#20202d',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
    paddingTop: '2%',
    borderRadius: 3
  },
  loginButtonText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff'
  }
});
