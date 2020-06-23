import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';

import styles from './HomeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.cards = [
      {
        title: 'List',
        desc: 'List your items here',
        navigatePage: 'List',
        icon: require('../../../assets/images/no-image.png')
      },
      {
        title: 'Chat Bot',
        desc: 'Chat with Bot here',
        navigatePage: 'Chat Bot',
        icon: require('../../../assets/images/no-image.png')
      },
      {
        title: 'Empty',
        desc: 'Design your desired page here',
        navigatePage: 'Empty1',
        icon: require('../../../assets/images/no-image.png')
      },
      {
        title: 'Empty',
        desc: 'Design your desired page here',
        navigatePage: 'Empty2',
        icon: require('../../../assets/images/no-image.png')
      }
    ];
  }
  navigatePage = page => {
    this.props.navigation.navigate(page);
  };
  renderCards = () => {
    const cardsToRender = [];
    this.cards.map((card, index) => {
      cardsToRender.push(
        <View style={styles.card} key={index}>
          <TouchableOpacity
            onPress={() => this.navigatePage(card.navigatePage)}
          >
            <ImageBackground
              style={styles.imgBackground}
              imageStyle={{ borderRadius: 15 }}
              source={card.icon}
            >
              <View style={styles.overlay} />
            </ImageBackground>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeading}>{card.title}</Text>
              <Text style={styles.cardText}>{card.desc}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
    return cardsToRender;
  };

  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.homeHeading}>Hello, User.</Text>
              <Text style={styles.homeSubHeading}>
                We're glad to help you with this template.
              </Text>
            </View>
            <View style={styles.cardsContainer}>{this.renderCards()}</View>
          </View>
        </View>
      </>
    );
  }
}

export default Home;
