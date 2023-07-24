import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../Screen/Component/Menu"; 
import { createTables } from "../data/db";
import {
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';

//initialize database
const initializeDb = async () => {
    createTables();
};

initializeDb();

const Home = (props) => {
  const description =
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used" +
    " to demonstrate the visual form of a document.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/Images/logo.jpeg")}
        />
        <Text style={styles.mainHeader}>Welcome to Edu App</Text>
        <Text style={styles.paraStyle}>{description} </Text>
        <View style={styles.menuStyle}>
          {/* <View style={styles.linestyle}>
          </View> */}
        </View>

        <View style={[
          styles.linestyle,
          {
             marginVertical: 5, 
          }
       ] }>
                <Menu/>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    // paddingHorizontal: "10px",
    backgroundColor: "#FFF",
    textAlign: "center",
  },

  headerImage: {
    height: "50%",
    width: "50%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 30,
    alignSelf: "center",
    justifyContent:"space-evenly"
    
    
    
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textAlign: "center",
    textTransform: "uppercase",
  },

  paraStyle: {
    textAlign: "center",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 25,
    lineHeight: 32,
    marginRight: 5,
    marginLeft: 5
  },

  linestyle: {

    borderWidth: 1,
    borderColor: "grey",  

  },

  
});

export default Home;
