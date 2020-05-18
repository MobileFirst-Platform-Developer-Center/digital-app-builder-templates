import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Tab from './pages/tab/Tab';
import Settings from './pages/settings/Settings';
import About from './pages/about/About';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        options={{ headerShown: false, title: null }}
        name="Tab"
        component={Tab}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen
        options={{ headerShown: false, title: null }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
