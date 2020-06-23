import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import styles from './Empty2Style';

const Empty2: () => React$Node = () => (
  <>
    <View style={styles.parent}>
      <View>
        <Text style={styles.text}>Hi, There</Text>
        <Text style={styles.text}>I am a Empty Page</Text>
        <Text style={styles.textDesc}>(Open my style.js to dig deeper! )</Text>
      </View>
    </View>
  </>
);

export default Empty2;
