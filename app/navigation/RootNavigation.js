import React from 'react'
import AuthNavigator from './public/AuthNavigator';
import PrivateNavigator from './private/PrivateNavigator';
import { NavigationContainer } from '@react-navigation/native';


const RootNavigation = () => {
  return (
    <NavigationContainer>
        {/* <AuthNavigator/> */}

        <PrivateNavigator/>
    </NavigationContainer>
  )
}

export default RootNavigation
