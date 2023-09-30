import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/private/Home';
import Account from '../../screens/private/Account';
const Stack = createNativeStackNavigator();

const PrivateNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Account" component={Account} />
  </Stack.Navigator>
  )
}

export default PrivateNavigator

