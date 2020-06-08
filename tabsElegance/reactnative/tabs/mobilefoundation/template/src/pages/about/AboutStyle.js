import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width + 100,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF'
  },
  skewContainer: {
    backgroundColor: '#5c258d',
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width + 100,
    position: 'absolute',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '10%'
  }
});

export default styles;
