import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/private/Home";
import Account from "../../screens/private/Account";
import Todos from "../../screens/private/Todos";
import AddTopic from "../../screens/private/AddTopic";
import colors from "../../theme/colors";
import AddTodo from "../../screens/private/AddTodo";
import EditTodo from "../../screens/private/EditTodo";
import EditTopic from "../../screens/private/EditTopic";
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
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          title: "Edit Todo",
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
        name="EditTodo"
        component={EditTodo}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          title: "Edit Topic",
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
        name="EditTopic"
        component={EditTopic}
      />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
