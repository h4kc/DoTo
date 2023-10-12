import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/private/Home";
import Account from "../../screens/private/Account";
import Todos from "../../screens/private/Todos";
import AddTopic from "../../screens/private/AddTopic";
import colors from "../../theme/colors";
import AddTodo from "../../screens/private/AddTodo";
const Stack = createNativeStackNavigator();

const PrivateNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          title: "New Topic",
          headerStyle: {
            backgroundColor: colors.white,
            
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Inter_900Black",
            fontSize: 22,
            
          },
        }}
        name="AddTopic"
        component={AddTopic}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          title: "New Todo",
          headerStyle: {
            backgroundColor: colors.white,
            
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Inter_900Black",
            fontSize: 22,
            
          },
        }}
        name="AddTodo"
        component={AddTodo}
      />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
