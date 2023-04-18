import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';    
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home'; 
import About from './src/Screen/About';
import Contact from './src/Screen/Contact'; 
import Course from './src/Screen/Course';
import UserData from './src/Screen/UserData'; 


export default function App() {
  const Stack = createNativeStackNavigator();
  return( 
  <NavigationContainer>
    {/* <Home Screen/> */}
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>

      {/* <About Screen/> */}
      <Stack.Screen name = "About" component={About}/>

      {/* <Contact Screen/> */}
      <Stack.Screen name = "Contact" component={Contact}/>

      {/* <Course Screen/> */}
      <Stack.Screen name = "Course" component={Course}/>

      {/* <UserData Screen/> */}
      <Stack.Screen name = "Student" component={UserData}/>

    </Stack.Navigator>
  </NavigationContainer>
);
}