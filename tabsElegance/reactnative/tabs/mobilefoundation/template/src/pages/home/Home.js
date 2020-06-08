import React from 'react';
import { View, Text } from 'react-native';

import styles from './HomeStyle';

const Home: () => React$Node = () => (
  <>
    <View style={styles.parent}>
      <View style={styles.skewContainer} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Tasks</Text>
      </View>
    </View>
  </>
);

export default Home;
