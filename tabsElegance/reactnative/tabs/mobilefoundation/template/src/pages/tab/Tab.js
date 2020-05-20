import React from 'react';
import {
  View,
  Image
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './TabStyle';
import Home from '../home/Home';
import Settings from '../settings/Settings';
import About from '../about/About';
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <>
        <View>
          <View style={styles.skewContainer} />
        </View>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Tasks',
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={
                      focused
                        ? require('../../../assets/images/taskActive.png')
                        : require('../../../assets/images/task.png')
                    }
                    style={{ height: 30, width: 30 }}
                  />
                );
              }
            }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarLabel: 'About',
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={
                      focused
                        ? require('../../../assets/images/aboutActive.png')
                        : require('../../../assets/images/about.png')
                    }
                    style={{ height: 30, width: 30 }}
                  />
                );
              }
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={
                      focused
                        ? require('../../../assets/images/settingsActive.png')
                        : require('../../../assets/images/settings.png')
                    }
                    style={{ height: 30, width: 30 }}
                  />
                );
              }
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default Tabs;
