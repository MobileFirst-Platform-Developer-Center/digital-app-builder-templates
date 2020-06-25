import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styles from './HomeStyle';

class Home extends Component{

  state = {
    features : {},
    properties: {}
  }

  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
             <Text style={styles.welcome}>Welcome to IBM Digital App Builder</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
  
};

export default Home;
