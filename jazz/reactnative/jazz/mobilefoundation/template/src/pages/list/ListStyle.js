import {
  StyleSheet,
  Dimensions,
} from 'react-native';


const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  skewContainer: {
    position: 'absolute',
    left: -150,
    top: -Dimensions.get('window').height * 0.47,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    backgroundColor: '#FF9E7B',
    zIndex: 1,
  },
  skewContainerTwo: {
    backgroundColor: '#E9446A',
    position: 'absolute',
    right: -150,
    top: -Dimensions.get('window').height * 0.4,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    zIndex: 1,
  },
  textContainer: {
    zIndex: 2,
    paddingLeft: Dimensions.get('window').width * 0.02,
    paddingTop: Dimensions.get('window').height * 0.13,
  },
  textHeading: {
    color: '#484848',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textSubHeading: {
    color: '#484848',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  slideStyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wrapper: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.25,
    zIndex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 5,
  },
  image: {
    borderRadius: 10,
    width: '80%',
    height: '100%',
  },
  textCard: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    top: Dimensions.get('screen').height * 0.4,
    paddingTop: Dimensions.get('screen').height * 0.13,
    paddingLeft: Dimensions.get('screen').width * 0.03,
    zIndex: 2,
    width: Dimensions.get('screen').width * 0.9,
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.4,
    elevation: 4,
    borderRadius: 10,
  },
  cardTextHeading: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#484848',
    fontWeight: 'bold',
  },
  cardTextSubHeading: {
    fontSize: 22,
    color: '#353535',
  },
  cardText: {
    fontSize: 15,
    color: '#353535',
  },
});


export default styles;
