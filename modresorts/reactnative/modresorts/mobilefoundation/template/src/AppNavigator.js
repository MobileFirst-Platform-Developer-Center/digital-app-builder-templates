import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Reservation from './pages/reservations/Reservation';
import ChatBot from './pages/ChatBot/ChatBot';
import { WLClient, WLAuthorizationManager } from 'react-native-ibm-mobilefirst';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

logout = () => {
  WLAuthorizationManager.logout('UserLogin').then(
    () => {
      WL.Logger.debug('logout onSuccess');
      this.props.navigation.navigate('Home');
    },
    response => {
      WL.Logger.error('logout onFailure: ' + JSON.stringify(response));
    }
  );

};
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false, title: null }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: null,
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 3 }}
              onPress={() => {
                this.logout();
              }}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={require('../assets/images/logout.png')}
              />
            </TouchableOpacity>
          )
        }}
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        options={{ title: null }}
        name="Reservation"
        component={Reservation}
      />
      <Stack.Screen
        options={{ title: null }}
        name="ChatBot"
        component={ChatBot}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
