import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';    
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home'; 
import About from './src/Screen/About';
import Contact from './src/Screen/Contact'; 
import Course from './src/Screen/Course';
import UserData from './src/Screen/UserData'; 
import CourseDetails from './src/Screen/CourseDetails';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";


export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return( 
  <NavigationContainer>
    {/* <Home Screen/> */}
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>

      {/* <About Screen/> */}
      <Stack.Screen name = "About" component={About}
      options ={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily:"Nunito_600SemiBold",
        },
        headerTitle: "About",
        headerTitleAlign: "center",
      }}
      
      />

      {/* <Contact Screen/> */}
      <Stack.Screen name = "Contact" component={Contact}
      options ={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily:"Nunito_600SemiBold",
        },
        headerTitle: "Contact",
        headerTitleAlign: "center",
      }}
      />

      {/* <Course Screen/> */}
      <Stack.Screen name = "Course" component={Course}
      options ={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily:"Nunito_600SemiBold",
        },
        headerTitle: "Courses",
        headerTitleAlign: "center",
      }}
      />

      {/* <UserData Screen/> */}
      <Stack.Screen name = "Student" component={UserData}
      options ={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily:"Nunito_600SemiBold",
        },
        headerTitle: "StdentsData",
        headerTitleAlign: "center",
      }}
      />
{/* <CourseDetails Screen/> */}
<Stack.Screen name = "CourseDetails" component={CourseDetails}
      options ={{
        headerTitleStyle: {
          fontSize: 25,
          fontFamily:"Nunito_600SemiBold",
        },
        // headerTitle: "CourseDetails",
        headerTitleAlign: "center",
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
}