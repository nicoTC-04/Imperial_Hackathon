import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Urgents from './src/ScreenUrgents';
import Orders from './src/ScreenOrders';
import Delivers from './src/ScreenDelivers';

//for navigation use [npm install @react-navigation/native] in terminal
import { NavigationContainer } from '@react-navigation/native';

//for bottomtab use [npm install @react-navigation/bottom-tabs] in terminal
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Urgents" component={Urgents} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Delivered" component={Delivers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
