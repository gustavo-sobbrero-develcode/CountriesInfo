import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Register from '../screens/register/Register';

const Tab = createBottomTabNavigator();

const config = {
  screens: {
    Home: 'h',
    Profile: 'p',
    Register: 'r',
  },
};

export default function BottomBar() {
  return (
    <NavigationContainer
      linking={{prefixes: ['https://www.ole.com.ar/'], config}}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
