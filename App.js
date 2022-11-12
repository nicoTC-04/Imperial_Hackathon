import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Urgents from './src/ScreenUrgents';
import Orders from './src/ScreenOrders';
import Delivers from './src/ScreenDelivers';

// for bottom tabs animations use [npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons] in terminal
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//for icons use [npm install --save react-native-vector-icons] in terminal
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//for navigation use [npm install @react-navigation/native] in terminal
import { NavigationContainer } from '@react-navigation/native';

//for bottomtab use [npm install @react-navigation/bottom-tabs] in terminal
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Urgents'){
              iconName = 'exclamation';
              size = focused ? 20 : 15;
            } else if (route.name === 'Orders'){
              iconName = 'truck';
              size = focused ? 20 : 15;
            } else if (route.name === 'Delivered'){
              iconName = 'check';
              size = focused ? 20 : 15;
            } 
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        activeColor='#ffffff'
        inactiveColor='#f99f43'
        barStyle={{backgroundColor: '#f77f32'}}
        shifting={true}
        >
        <Tab.Screen name="Urgents" component={Urgents} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Delivered" component={Delivers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
