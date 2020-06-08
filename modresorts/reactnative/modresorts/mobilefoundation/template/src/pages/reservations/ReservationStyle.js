import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    height: '100%',
    width: '100%'
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 30,
    width: '80%',
    height: '90%'
  },

  img: {
    height: '83%',
    width: '100%'
  },
  titleText: {
    height: '17%',
    alignSelf: 'center',
    fontSize: 18,
    paddingTop: '2%'
  }
});
