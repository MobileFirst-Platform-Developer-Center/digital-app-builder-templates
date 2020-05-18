import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import styles from './SettingsStyle';

const Settings: () => React$Node = () => (
  <>
    <View style={styles.parent}>
      <View style={styles.skewContainer} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View>
        <Text style={styles.text}>Settings</Text>
      </View>
    </View>
  </>
);

export default Settings;
