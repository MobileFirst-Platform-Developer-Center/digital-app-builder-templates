import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Chat from './pages/chat/Chat';
import List from './pages/list/List';
import ListDetails from './pages/list/ListDetails';
import Empty1 from './pages/empty1/Empty1';
import Empty2 from './pages/empty2/Empty2';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} options={{ headerLeft: null }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, title: null }}
      />
      <Stack.Screen name="Chat Bot" component={Chat} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen
        name="Empty1"
        component={Empty1}
        options={{ title: null }}
      />
      <Stack.Screen
        name="Empty2"
        component={Empty2}
        options={{ title: null }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
