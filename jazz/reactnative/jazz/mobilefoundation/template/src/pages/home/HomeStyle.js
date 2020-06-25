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
    // top: `-${Dimensions.get('window').height * 0.05}`,
    top: -280,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    backgroundColor: '#FF9E7B',
    opacity: 0.9,
    // zIndex: 1,
  },
  skewContainerTwo: {
    backgroundColor: '#E9446A',
    position: 'absolute',
    right: -150,
    top: -210,
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
  contentContainer: {
    paddingLeft: 10,
    marginTop: Dimensions.get('window').height * 0.2,
  },
  homeHeadTextContainer: {
    zIndex: 4,
  },
  homeHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#353535',
  },
  homeSubHeading: {
    fontSize: 15,
    color: '#484848',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },

  card: {
    borderRadius: 4,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: Dimensions.get('window').width / 2 - 20,
    marginRight: 5,
    marginBottom: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    height: Dimensions.get('window').height * 0.27,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  cardOdd: {
    backgroundColor: '#e4e2e2',
  },
  cardEven: {
    backgroundColor: '#E9446A',
  },
  cardContent: {
    paddingTop: 10,
    zIndex: 2,
  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardText: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    width: Dimensions.get('window').width / 2 - 40,
  },
  evenHeading: {
    color: '#ffffff',
  },
  evenText: {
    color: '#f5f5f5',
  },
  oddHeading: {
    color: '#353535',
  },
  oddText: {
    color: '#484848',
  },
  cardIconImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});

export default styles;
