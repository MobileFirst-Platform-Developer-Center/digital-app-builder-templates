import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Reservation from './pages/reservations/Reservation';
import ChatBot from './pages/ChatBot/ChatBot';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const back = <Text>Hello</Text>;
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
            <TouchableOpacity style={{ paddingRight: 3 }}></TouchableOpacity>
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
