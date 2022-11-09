import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Continents from '../screens/continents/Continents';
import Register from '../screens/register/Register';
import Countries from '../screens/countries/Countries';

const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['develfood://'],
  config: {
    screens: {
      Countries: 'h',
      Register: 'r',
      Continents: 'p',
    },
  },
};

export default function BottomBar() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Countries" component={Countries} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Continents" component={Continents} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
