import React, { useCallback, useEffect, useState } from 'react';
import RootNavigation from "./app/navigation/RootNavigation";
import { t } from "./app/translation";
import * as Localization from "expo-localization";
import Translation from "./app/translation/context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import AuthContext from "./app/auth/context";
import * as SplashScreen from 'expo-splash-screen';
import { signOut } from 'firebase/auth';
import { auth } from './firbase';
const isRtl = Localization.getLocales()[0].textDirection === "rtl";
export default function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  const checkLocalUser = async () => {
    try {
      console.log("Checking for local user")
      const userJson = await AsyncStorage.getItem("@doto-user");
      if (userJson) {
          const userData = userJson ? JSON.parse(userJson) : null;
      console.log(
        "User is present in local storage, checking token expiration : ", userData.displayName
      );
      const currentTime = Date.now();
      if(userData.stsTokenManager.expirationTime < currentTime){
        console.log("User token expired, removing and sign out")
        await AsyncStorage.removeItem("@doto-user")  
        setUser(null)
        await signOut(auth)
      }else{

        setUser(userData);
      }
      }else{
        console.log("No local user")
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("End of checking local user")
      setAppIsReady(true);
    }
  };
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  useEffect(() => {
    checkLocalUser();
  }, []);
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Translation.Provider value={{ isRtl, t }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <RootNavigation onLayoutRootView={onLayoutRootView}/>
      </AuthContext.Provider>
    </Translation.Provider>
  );
}
