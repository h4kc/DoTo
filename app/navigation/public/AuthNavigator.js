import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../screens/public/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

  )
}

export default AuthNavigator

const styles = StyleSheet.create({})