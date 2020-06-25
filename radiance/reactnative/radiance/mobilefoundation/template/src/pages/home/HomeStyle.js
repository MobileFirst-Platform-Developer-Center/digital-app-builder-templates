import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#25313c',
    flex: 1,
  },
  homeHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  homeSubHeading: {
    fontSize: 15,
    color: '#DCDCDC',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  contentContainer: {
    paddingLeft: 10,
    marginTop: Dimensions.get('window').height * 0.1,
  },
  card: {
    borderRadius: 15,
    width: Dimensions.get('window').width / 2 - 20,
    marginRight: 5,
    marginBottom: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    height: Dimensions.get('window').height * 0.22,
  },
  cardImage: {
    position: 'absolute',
    height: Dimensions.get('window').height * 0.1,
  },
  cardContent: {
    // borderRadius: 6,
    paddingTop: 30,
    paddingLeft: 10,
    position: 'absolute',
    zIndex: 2,
  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    width: Dimensions.get('window').width / 2 - 40,
  },
  imgBackground: {
    width: '100%',
    height: Dimensions.get('window').height * 0.22,
    borderRadius: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    opacity: 0.9,
    zIndex: 1,
  },
});

export default styles;
