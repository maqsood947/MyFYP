import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';

import AnalysisScreen from '../screens/Analysis';
import AccountsScreen from '../screens/Accounts';
import CategoriesScreen from '../screens/categories';
import TAbNavigation from './TabNAvigation';
import MyDrawer from './DrawerNAvigation';
import ProfileScreen from '../screens/Profile';
import SettingScreen from '../screens/Settings';
const StackNavigation = () => {

    const Stack = createNativeStackNavigator();

  return (
   
    <Stack.Navigator>
    <Stack.Screen name="TAbNavigation" component={TAbNavigation} options={{headerShown:false}} />
    <Stack.Screen name="Settings" component={SettingScreen} options={{headerShown:false}} />

    <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown:false}} />

    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    <Stack.Screen name="Analysis" component={AnalysisScreen} options={{headerShown:false}} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />

     
      {/* <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="DesignCharactor" component={DesignCharactor} options={{headerShown:false}} />
      
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="ChoosePyjama" component={ChoosePyjama} options={{headerShown:false}} />
      <Stack.Screen name="Inputfieldanimation" component={Inputfieldanimation} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} /> */}
    

      

     
      
   

    </Stack.Navigator>
  )
}

export default StackNavigation