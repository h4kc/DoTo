import React, { useState, useEffect, useContext } from "react";
import PrivateNavigator from "./private/PrivateNavigator";
import Login from "../screens/public/Login";
import * as Google from "expo-auth-session/providers/google";
import * as webBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../firbase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import AuthContext from "../auth/context";
import { NavigationContainer } from "@react-navigation/native";
webBrowser.maybeCompleteAuthSession();

const RootNavigation = ({ onLayoutRootView }) => {
  // const [user, setUser] = useState()
  const authContext = useContext(AuthContext);

  // const [loading, setLoading] = useState(true)
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "522208820944-nasuhd74crs4848gkejkrlnbnm8t6790.apps.googleusercontent.com",
    androidClientId:
      "522208820944-q9ti0av3r814u7ula371ak74clds6vkb.apps.googleusercontent.com",
  });
  // const checkLocalUser = async () => {
  //   try {
  //     setLoading(true)
  //     const userJson = await AsyncStorage.getItem("@doto-user")
  //     const userData = userJson ? JSON.parse(userJson) : null
  //     console.log("Local User: ",userData)
  //     setUser(userData)
  //   } catch (error) {
  //     console.log(error.message)
  //   }finally{
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        authContext.setUser(user);
        await AsyncStorage.setItem("@doto-user", JSON.stringify(user));
      } else {
        console.log("OnauthStateChanged: Not Triggred");
      }
    });

    return () => unsub();
  }, []);
  // if (loading) {
  //   return <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
  //     <ActivityIndicator size={"large"}/>
  //   </View>
  // }
  if (authContext.user) {
    return (
      <NavigationContainer onReady={onLayoutRootView}>
        <PrivateNavigator />
      </NavigationContainer>
    );
  } else {
    return <Login onGooglePress={promptAsync} />;
  }
};

export default RootNavigation;
