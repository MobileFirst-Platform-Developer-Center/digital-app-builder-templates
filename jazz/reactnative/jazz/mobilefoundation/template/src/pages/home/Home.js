import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './HomeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WLClient, WLAuthorizationManager } from 'react-native-ibm-mobilefirst';
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
  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          onPress={() => {
            this.logout();
          }}
        >
          <Text style={{ color: 'blue' }}>Logout</Text>
        </TouchableOpacity>
      )
    });
  }
  logout = () => {
    WLAuthorizationManager.logout('UserLogin').then(
      () => {
        this.props.navigation.navigate('Login');
      },
      response => {
        console.log('error in loging out' + JSON.stringify(response));
      }
    );
  };
  navigatePage = page => {
    this.props.navigation.navigate(page);
  };
  renderCards = () => {
    const cardsToRender = [];
    this.cards.map((card, index) => {
      let cardClass = styles.cardOdd;
      let cardHeadingClass = styles.oddHeading;
      let cardTextClass = styles.oddText;

      if (index % 2 === 0) {
        cardClass = styles.cardEven;
        cardHeadingClass = styles.evenHeading;
        cardTextClass = styles.evenText;
      }
      cardsToRender.push(
        <View style={[styles.card, cardClass]} key={index}>
          <TouchableOpacity
            onPress={() => this.navigatePage(card.navigatePage)}
          >
            <Image source={card.icon} style={styles.cardIconImage} />
            <View style={styles.cardContent}>
              <Text style={[styles.cardHeading, cardHeadingClass]}>
                {card.title}
              </Text>
              <Text style={[styles.cardText, cardTextClass]}>{card.desc}</Text>
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
          <View style={styles.skewContainer} />
          <View style={styles.skewContainerTwo} />
          <View style={styles.contentContainer}>
            <View style={styles.homeHeadTextContainer}>
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
