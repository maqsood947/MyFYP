import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/Navigation/DrawerNAvigation';
import StackNavigation from './src/Navigation/StackNavigation';
import TAbNavigation from './src/Navigation/TabNAvigation';



export default function App() {
  return (
    // <GestureHandlerRootView/>
    <View style={{flex:1}}>
    <NavigationContainer  >
      <MyDrawer/>
{/* <StackNavigation/>    */}
  </NavigationContainer>

    </View>
    // <GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
