

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './ListDetailsStyle';

class ListDetails extends React.Component {
  constructor(props) {
    super(props);
    this.params = props.route.params;
  }
  renderReviews = () => {
    const reviews = [];
    this.params.reviews.map(review => {
      reviews.push(
        <View style={styles.reviewItemContainer}>
          <Text style={styles.reviewName}>{review.name}</Text>
          <Text style={styles.reviewText}>{review.review}</Text>
        </View>,
      );
    });
    return reviews;
  };
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar hidden />
        <View style={styles.backArrowContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("List");
            }}>
            <Image
              source={require('../../../assets/images/back_arrow.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <Image source={this.params.image} style={styles.image} />
        <View style={styles.scrollParent}>
          <View style={styles.contentContainer}>
            <View style={mainContentPanelStyle(this.params.itemColor)}>
              <Text style={styles.heading}>{this.params.heading}</Text>
              <Text style={styles.subHeading}>{this.params.subHeading}</Text>
              <Text style={styles.description}>{this.params.description}</Text>
            </View>
            <View style={containerStyle(this.params.itemColor)}>
              <Text style={styles.reviewHeading}>Reviews</Text>
              <ScrollView>{this.renderReviews()}</ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const containerStyle = function(bgColor) {
  return {
    flex: 1,
    marginTop: 20,
    backgroundColor: bgColor,
    borderRadius: 10,
    padding: 10,
  };
};
const mainContentPanelStyle = function(bgColor) {
  return {
    width: Dimensions.get('window').width * 0.95,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: bgColor,
    padding: 10,
  };
};

export default ListDetails;
