import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image, Settings } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icons from Expo
import StackNavigation from './StackNavigation';
import ProfileScreen from '../screens/Profile';
import SettingScreen from '../screens/Settings';


const Drawer = createDrawerNavigator();

function CustomDrawerItem({ label, onPress, rightIcon,leftIcon }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.CustomDrawerContent}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
      <MaterialIcons name={leftIcon} size={24} color="white" /> 
        <Text style={{ color: '#fff' }}>{label}</Text>
      </View>
      
      <MaterialIcons name={rightIcon} size={24} color="white" />
      
    </TouchableOpacity>
  );
}
//{flexDirection:'row', justifyContent:'center', alignItems:'center',paddingVertical:10,paddingHorizontal:20}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

      <View style={styles.drawerHeader}>
        <Text style={{color:'white',fontSize:20, fontWeight:"bold"}}>BudgetBuddy</Text>
       
      </View>

      <CustomDrawerItem
      leftIcon="home" 
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        rightIcon="chevron-right"
      />


      <CustomDrawerItem
      leftIcon="person"
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
        rightIcon="chevron-right"
      />
      <CustomDrawerItem
      leftIcon="settings"
        label="Settings"
        
        onPress={() => props.navigation.navigate('Settings')}
        
        rightIcon="chevron-right"
      />
      <CustomDrawerItem
         leftIcon="category"
        label="Categories"
        onPress={() => props.navigation.navigate('Categories')}
        rightIcon="chevron-right"
      />
     
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      id="LeftDrawer"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#004e92',
          width:'80%'
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#ccc',
      }}
    >
      <Drawer.Screen name="Stack" component={StackNavigation} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }}/>

     
     

    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    flexDirection:'row',
     justifyContent:'center',
      alignItems:'center',
      paddingVertical:10,
      paddingHorizontal:20,
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      marginTop: 20
  },
  CustomDrawerContent:{
    
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
    
  }
});


export default MyDrawer;
