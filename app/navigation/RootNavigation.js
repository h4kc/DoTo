import React, {useState, useEffect} from 'react'
import AuthNavigator from './public/AuthNavigator';
import PrivateNavigator from './private/PrivateNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/public/Login';
import * as Google from "expo-auth-session/providers/google"
import * as webBrowser from "expo-web-browser"
import {GoogleAuthProvider,
onAuthStateChanged,
signInWithCredential
} from "firebase/auth"
import {auth} from "../../firbase"
webBrowser.maybeCompleteAuthSession();


const RootNavigation = () => {
const [user, setUser] = useState()
const [rquest, response, promptAsync] = Google.useAuthRequest({
  iosClientId:"522208820944-nasuhd74crs4848gkejkrlnbnm8t6790.apps.googleusercontent.com",
  androidClientId:"522208820944-q9ti0av3r814u7ula371ak74clds6vkb.apps.googleusercontent.com"
})
useEffect(() => {
 if(response?.type==="success"){
  const {id_token} = response.params
  const credential = GoogleAuthProvider.credential(id_token)
  signInWithCredential(auth,credential)
 }
}, [response])

  return (
    <Login onGooglePress={promptAsync}/>
    // <NavigationContainer>
    //     {/* <AuthNavigator/> */}

    //     <PrivateNavigator/>
    // </NavigationContainer>
  )
}

export default RootNavigation
