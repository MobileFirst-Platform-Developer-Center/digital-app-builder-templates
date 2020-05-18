import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './LandingStyle';
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.image}>
              <Image
                source={require('../../../assets/images/logo2.png')}
                style={styles.img}
              />
            </View>
            <View style={styles.image}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Reservation');
                }}
              >
                <Image
                  source={require('../../../assets/images/resorts.png')}
                  style={styles.imgOpt}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.image}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ChatBot');
                }}
              >
                <Image
                  source={require('../../../assets/images/ask-anything.png')}
                  style={styles.imgOpt}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <ImageBackground
            style={[styles.component, styles.fixed, { zIndex: -1 }]}
            source={require('../../../assets/images/resorts.jpeg')}
          />
        </SafeAreaView>
      </>
    );
  }
}

export default Landing;
