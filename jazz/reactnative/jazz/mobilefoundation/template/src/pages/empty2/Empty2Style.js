import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  skewContainer: {
    position: 'absolute',
    left: -150,
    top: -250,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    backgroundColor: '#FF9E7B',
    opacity: 0.9,
    zIndex: 1,
  },
  skewContainerTwo: {
    backgroundColor: '#E9446A',
    position: 'absolute',
    right: -150,
    top: -180,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    // zIndex: 1,
  },
  textContainer: {
    zIndex: 2,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  textDesc: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;
