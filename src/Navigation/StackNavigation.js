import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import AnalysisScreen from '../screens/Analysis';

import TAbNavigation from './TabNAvigation';
import MyDrawer from './DrawerNAvigation';
import ProfileScreen from '../screens/Profile';
import SettingScreen from '../screens/Settings';
const StackNavigation = () => {

    const Stack = createNativeStackNavigator();

  return (
   
    <Stack.Navigator >
    <Stack.Screen name="TAbNavigation" component={TAbNavigation} options={{headerShown:false}} />
    <Stack.Screen name="Settings" component={SettingScreen} options={{headerShown:false}} />

    <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown:false}} />

    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    <Stack.Screen name="Analysis" component={AnalysisScreen} options={{headerShown:false}} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />

     
   
    

      

     
      
   

    </Stack.Navigator>
  )
}

export default StackNavigation