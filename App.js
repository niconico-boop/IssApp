import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "./screens/homeScreen";
import IssLocationScreen from "./screens/IssLocationScreen";
import MeteorScreen from "./screens/meteorScreen";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initalRouteName = "home" screenOptions = {{
      headerShown: false
    }} >
    <Stack.Screen name = "home" component = {HomeScreen} />
    <Stack.Screen name = "iss location" component = {IssLocationScreen} />
    <Stack.Screen name = "meteors" component = {MeteorScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

