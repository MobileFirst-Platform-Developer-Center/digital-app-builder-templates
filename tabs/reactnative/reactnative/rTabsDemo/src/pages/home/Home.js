import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

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
