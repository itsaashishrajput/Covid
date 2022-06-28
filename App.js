import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
// In App.js in a new project

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import Precautions from './src/screens/Precautions';
import About from './src/screens/About';
import CustomDrawer from './src/component/CustomDrawer';
import HelpLine from './src/screens/HelpLine';


// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function App() {

  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [showHome, setShowHome] = useState(true);
  const [showPrecaution, setShowPrecaution] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowHome(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowPrecaution(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowAbout(false);
    }, 5000);
  }, []);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> 

        {showSplashScreen ? <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> : null}
        {showHome ? <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/> : null}
        {showPrecaution ? <Stack.Screen name="Precautions" component={Precautions} options={{headerShown:false}}/> : null}
        <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
     </Stack.Navigator> */}
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
        drawerStyle:{
          width: 200,
          height:700,
          backgroundColor:'#DEF7FF',
          borderRadius:20,
          alignItems:'center'
        },
        drawerActiveBackgroundColor:'#C9F2FF',
        drawerActiveTintColor:'#333',
        drawerInactiveTintColor:'#333',
      }} >
        <Drawer.Screen name = "Home" component={HomeScreen} options={{headerShown:false}} />
        <Drawer.Screen name = "Precaution" component={Precautions} options={{headerShown:false}} />
        <Drawer.Screen name = "HelpLine" component={HelpLine} options={{headerShown:false}} />
        <Drawer.Screen name = "About" component={About} options={{headerShown:false}} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;
