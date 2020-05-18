import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  skewContainer: {
    backgroundColor: '#5c258d',
    height: Dimensions.get('window').height * 0.1,
    width: Dimensions.get('window').width + 100,
    position: 'absolute',
    opacity: 0.5
  }
});

export default styles;
