import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './public/AuthNavigator';
import PrivateNavigator from './private/PrivateNavigator';


const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AuthNavigator/>

        {/* <PrivateNavigator/> */}
    </NavigationContainer>
  )
}

export default RootNavigation
