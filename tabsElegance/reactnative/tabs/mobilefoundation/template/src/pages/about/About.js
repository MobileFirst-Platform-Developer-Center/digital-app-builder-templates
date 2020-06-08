import React from 'react';
import { View, Text } from 'react-native';

import styles from './AboutStyle';

const About: () => React$Node = () => (
  <>
    <View style={styles.parent}>
      <View style={styles.skewContainer} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>About</Text>
      </View>
      <View>
        <Text style={styles.text}>About This App ..</Text>
      </View>
    </View>
  </>
);

export default About;
