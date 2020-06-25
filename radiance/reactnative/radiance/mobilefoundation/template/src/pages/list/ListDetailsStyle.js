import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#2d3c42',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#3c4956',
    borderRadius: 10,
    padding: 10,
  },
  scrollParent: {
    height: Dimensions.get('window').height * 0.8,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  contentContainer: {
    flexDirection: 'column',
  },
  mainContentPanel: {
    width: Dimensions.get('window').width * 0.95,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#3c4956',
    padding: 10,
  },
  backArrowContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.02,
    position: 'absolute',
    zIndex: 5,
    top: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  image: {
    height: Dimensions.get('window').height * 0.35,
    width: Dimensions.get('window').width,
  },
  reviewItemContainer: {
    width: Dimensions.get('window').width * 0.9,
    borderBottomColor: '#ececec',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  reviewHeading: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ececec',
  },
  subHeading: {
    color: '#ececec',
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    paddingBottom: 20,
    color: '#ececec',
  },
  reviewName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  reviewText: {
    paddingTop: 5,
    fontSize: 13,
    color: '#fff',
  },
});
export default styles;
