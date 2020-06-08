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

  image: { alignItems: 'center', justifyContent: 'center' },
  img: {
    height: 80,
    width: 240,
    marginTop: 40
  },
  imgOpt: {
    height: 100,
    width: 240,
    marginTop: 150
  }
});
