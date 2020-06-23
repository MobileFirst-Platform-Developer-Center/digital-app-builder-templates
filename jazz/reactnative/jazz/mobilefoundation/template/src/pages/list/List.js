import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './ListStyle';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSlideIndex: 0
    };
    this.items = [
      {
        image: require('../../../assets/images/italy.jpeg'),
        heading: 'Cinque Terre',
        subHeading: 'Italy',
        description:
          'The Cinque Terre is a coastal area within Liguria, in the northwest of Italy. It lies west of La Spezia, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore.',
        reviews: [
          {
            name: 'Andrew Smith',
            review:
              'Cinque terre is one the most beautiful places I have ever visited.'
          },
          {
            name: 'Mark Walter',
            review:
              'The best thing about this place is you can stroll around in the market, no cabs needed.'
          },
          {
            name: 'Wilson',
            review: 'Once is not enough for this place! Such beauty.'
          },
          {
            name: 'Harry',
            review: 'You must visit this on your next trip to Italy!'
          }
        ],
        briefDesc:
          'Cinque Terre is mentioned in documents dating to the 11th century. Monterosso and Vernazza were settled first and the other villages grew later, whilst within the territory of the Republic of Genoa. In the 16th century the inhabitants reinforced existing forts and built new defense towers to defend the area from attacks by the Turks. Cinque Terre experienced economic decline from the 17th to 19th centuries, recovering when an arsenal was built in La Spezia and it gained a railway link to Genoa. The railway led to migration from the area and a decline in traditional industries until the growth of tourism from the 1970s onwards brought some prosperity.'
      },
      {
        image: require('../../../assets/images/paris.jpeg'),
        heading: 'Paris',
        subHeading: 'France',
        description:
          "Paris is the capital and most populous city of France. The city's top tourist attraction was the Notre Dame Cathedral followed by the Louvre Museum,  Centre Pompidou, Musée d'Orsay, The National Museum of Natural History.",
        reviews: [
          {
            name: 'Andrew Smith',
            review:
              'Paris is one the most beautiful places I have ever visited.'
          },
          {
            name: 'Mark Walter',
            review:
              'The best thing about this place is you can stroll around in the market, no cabs needed.'
          },
          {
            name: 'Wilson',
            review: 'Once is not enough for this place! Such beauty.'
          },
          {
            name: 'Harry',
            review: 'You must visit this on your next trip to France!'
          }
        ],
        briefDesc:
          'The city is a major railway, highway, and air-transport hub served by two international airports: Paris-Charles de Gaulle (the second busiest airport in Europe) and Paris-Orly. Opened in 1900,'
      },
      {
        image: require('../../../assets/images/madurai.jpeg'),
        heading: 'Madurai',
        subHeading: 'India',
        description:
          'Meenakshi Temple (also referred to as Meenakshi Amman or Meenakshi-Sundareshwara Temple), is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva.',
        reviews: [
          {
            name: 'Narayan',
            review:
              'Madurai is one the most beautiful places I have ever visited.'
          },
          {
            name: 'Jay Vijay',
            review:
              'The best thing about this place is you can stroll around in the market, no cabs needed.'
          },
          {
            name: 'Mahesh Nath',
            review: 'Once is not enough for this place! Such beauty.'
          },
          {
            name: 'Vikram Choudhary',
            review: 'You must visit this on your next trip to Madurai!'
          }
        ],
        briefDesc:
          'Madurai is closely associated with the Tamil language, and the third Tamil Sangam, a major congregation of Tamil scholars said to have been held in the city. The recorded history of the city goes back to the 3rd century BCE, being mentioned by Megasthenes, the Greek ambassador to the Maurya empire, and Kautilya, a minister of the Mauryan emperor Chandragupta Maurya.'
      }
    ];
  }
  onSwipe = index => {
    this.setState({
      activeSlideIndex: index
    });
  };
  navigateToDetails = () => {
    const selectedItem = this.items[this.state.activeSlideIndex];
    this.props.navigation.navigate('ListDetails', {
      heading: selectedItem.heading,
      subHeading: selectedItem.subHeading,
      description: selectedItem.description,
      image: selectedItem.image,
      reviews: selectedItem.reviews
    });
  };
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar backgroundColor="#ab334f" />
        <View style={styles.skewContainer} />
        <View style={styles.skewContainerTwo} />
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>Discover</Text>
          <Text style={styles.textSubHeading}>
            Let's get into the unexplored world.
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Swiper
            showsButtons={false}
            showsPagination={false}
            onIndexChanged={index => this.onSwipe(index)}
          >
            {this.items.map((item, key) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => this.navigateToDetails()}
                >
                  <View key={key} style={styles.slideStyle}>
                    <Image source={item.image} style={styles.image} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </Swiper>
        </View>
        <View style={styles.textCard}>
          <Text style={styles.cardTextHeading}>
            {this.items[this.state.activeSlideIndex].heading}
          </Text>
          <Text style={styles.cardTextSubHeading}>
            {this.items[this.state.activeSlideIndex].subHeading}
          </Text>
          <Text style={styles.cardText} numberOfLines={5} ellipsizeMode="tail">
            {this.items[this.state.activeSlideIndex].description}
          </Text>
        </View>
      </View>
    );
  }
}

export default List;
