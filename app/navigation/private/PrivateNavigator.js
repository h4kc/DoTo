import React from "react";
import Home from "../../screens/private/Home";
import Account from "../../screens/private/Account";
import Todos from "../../screens/private/Todos";
import AddTopic from "../../screens/private/AddTopic";
import colors from "../../theme/colors";
import AddTodo from "../../screens/private/AddTodo";
import EditTodo from "../../screens/private/EditTodo";
import EditTopic from "../../screens/private/EditTopic";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import fonts from "../../theme/fonts";

const Stack = createNativeStackNavigator();

const PrivateNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AddTopic"
        component={AddTopic}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AddTodo"
        component={AddTodo}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="EditTodo"
        component={EditTodo}
      />
      <Stack.Screen
        options={{
          headerShown: false,
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
