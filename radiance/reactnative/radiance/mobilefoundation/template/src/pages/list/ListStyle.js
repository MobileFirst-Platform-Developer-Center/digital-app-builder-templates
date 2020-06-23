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
  listHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Dimensions.get('window').height * 0.01,
  },
  listHeadText: {
    width: '90%',
    textAlign: 'center',
    color: '#ffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingTop: Dimensions.get('window').height * 0.02,
  },
  item: {
    flex: 1,
  },
  itemParent: {
    width: Dimensions.get('window').width * 0.9,
    marginBottom: Dimensions.get('window').height * 0.04,
  },
  itemContainer: {
    flexDirection: 'row',
    elevation: 6,
    borderRadius: 10,
  },
  itemContainerOneBg: {
    backgroundColor: '#3c4956',
  },
  itemContainerTwoBg: {
    backgroundColor: '#322f3e',
  },
  itemContainerThreeBg: {
    backgroundColor: '#2c364d',
  },
  itemContentContainer: {
    flexDirection: 'column',
    padding: 10,
    width: '60%',
  },
  itemImage: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    paddingBottom: 10,
  },
  description: {
    fontSize: 12,
    paddingRight: 10,
    color: '#dcdcdc',
  },
});

export default styles;
