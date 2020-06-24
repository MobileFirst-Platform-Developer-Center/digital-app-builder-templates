import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

import styles from './LandingStyle';

export class Landing extends React.Component {
  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={styles.skewContainer} />
          <View style={styles.skewContainerTwo} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Covid 19</Text>
            <Text style={styles.subTitle}>Are you feeling sick?</Text>
            <Text style={styles.subtext}>
              If you feel sick with any of the Covid-19 symptoms, please call or
              message immediately.
            </Text>
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Call</Text>
              </View>
              <View style={styles.btn}>
                <Text style={styles.btnText}>SMS</Text>
              </View>
            </View>
          </View>
          <View style={styles.prevContainer}>
            <Text style={styles.prevTitle}>How can I stay Safe?</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <View style={styles.prevIconContainer}>
                <Image
                  source={require('../../../assets/images/handWash.png')}
                  style={{ height: 90, width: 90 }}
                />
                <Text style={styles.prevIconText}>
                  Regularly wash your hands
                </Text>
              </View>
              <View style={styles.prevIconContainer}>
                <Image
                  source={require('../../../assets/images/mask.png')}
                  style={{ height: 90, width: 90 }}
                />
                <Text style={styles.prevIconText}>Always wear a mask</Text>
              </View>
              <View style={styles.prevIconContainer}>
                <Image
                  source={require('../../../assets/images/sanitizer.png')}
                  style={{ height: 90, width: 90 }}
                />
                <Text style={styles.prevIconText}>Use hand sanitizer</Text>
              </View>
              <View style={styles.prevIconContainer}>
                <Image
                  source={require('../../../assets/images/shake.png')}
                  style={{ height: 90, width: 90 }}
                />
                <Text style={styles.prevIconText}>Social Distancing</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Landing;
