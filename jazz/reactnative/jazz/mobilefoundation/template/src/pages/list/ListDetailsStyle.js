import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  scrollParent: {
    height: Dimensions.get('window').height * 0.8,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  contentContainer: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'column',
  },
  backArrowContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    paddingTop: Dimensions.get('screen').height * 0.01,
    left: Dimensions.get('screen').width * 0.02,
  },
  backIcon: {
    width: 20,
    height: 20,
  },

  image: {
    height: Dimensions.get('window').height * 0.35,
    width: Dimensions.get('window').width,
  },
  reviewItemContainer: {
    backgroundColor: '#ffffff',
    elevation: 5,
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  reviewHeading: {
    fontSize: 20,
    color: '#484848',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    color: '#A1a6b1',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 22,
    color: '#484848',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#f0f3f3',
  },
  reviewName: {
    fontSize: 18,
    fontWeight: '600',
  },
  reviewText: {
    paddingTop: 5,
    fontSize: 15,
  },
  button: {
    width: Dimensions.get('window').width,
    backgroundColor: '#E9446A',
    bottom: 0,
    position: 'absolute',
    padding: Dimensions.get('window').height * 0.02,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default styles;
