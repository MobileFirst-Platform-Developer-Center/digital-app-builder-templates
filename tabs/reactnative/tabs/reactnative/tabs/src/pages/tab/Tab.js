import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
                  <Icon
                    name="check-circle"
                    size={22}
                    color={focused ? '#3da2ff' : '#b8b8b8'}
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
                  <Icon
                    name="info-circle"
                    size={22}
                    color={focused ? '#3da2ff' : '#b8b8b8'}
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
                  <Icon
                    name="cog"
                    size={22}
                    color={focused ? '#3da2ff' : '#b8b8b8'}
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
