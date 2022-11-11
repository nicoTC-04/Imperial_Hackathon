import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Urgents from './src/ScreenUrgents';
import Orders from './src/ScreenOrders';
import Delivers from './src/ScreenDelivers';
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