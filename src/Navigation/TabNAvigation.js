import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import AnalysisScreen from '../screens/Analysis';
import AccountsScreen from '../screens/Accounts';
import CategoriesScreen from '../screens/categories';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TAbNavigation() {
  return (
      <Tab.Navigator screenOptions={{headerShown: false,  tabBarStyle: { backgroundColor: '#004e92', paddingBottom:10, paddingTop:10, height: 60,  },}}  >


        <Tab.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          tabBarIcon: () => <AntDesign name="home" size={24} color="white"  />,
          tabBarLabelStyle: { color: 'white', fontSize: 12, fontWeight:"500" }
        }}  />


        <Tab.Screen name="Analysis" component={AnalysisScreen} 
         options={{
            title: 'Analysis',
            tabBarIcon: ({ color }) => <AntDesign name="piechart" size={24} color="white" /> ,
            tabBarLabelStyle: { color: 'white', fontSize: 12, fontWeight:"500" }
          }} />


        <Tab.Screen name="Accounts" component={AccountsScreen}
         options={{
          title: 'Accounts',
          tabBarIcon: ({ color }) => <AntDesign name="creditcard" size={24} color="white"  />,
          tabBarLabelStyle: { color: 'white', fontSize: 12, fontWeight:"500" }
        }} />


        <Tab.Screen name="Categories" component={CategoriesScreen} 
       options={{
        title: 'Catagory',
        tabBarIcon: ({ color }) => <MaterialIcons name="category" size={24} color="white"  />,
        tabBarLabelStyle: { color: 'white' , fontSize: 12, fontWeight:"500"}
      
          }} />



      </Tab.Navigator>
  );
}