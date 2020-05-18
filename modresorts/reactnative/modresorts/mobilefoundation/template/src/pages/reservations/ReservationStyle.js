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
  card: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 30,
    width: '80%',
    height: '75%'
  },

  img: {
    height: '83%',
    width: '100%'
  },
  login: {
    alignSelf: 'center',
    backgroundColor: '#35354b',
    marginTop: 55,
    width: 350,
    height: 250,
    shadowColor: '#3e3f52',
    alignItems: 'center',
    paddingTop: 20
  },
  input: {
    margin: 25,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff'
  },
  loginButton: {
    marginTop: 15,
    backgroundColor: '#20202d',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 3
  },
  titleText: {
    height: '17%',
    alignSelf: 'center',
    fontSize: 18,
    paddingTop: '2%'
  }
});
