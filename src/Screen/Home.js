import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../Screen/Component/Menu"; 

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
          <View style={styles.linestyle}>
          </View>
        </View>
        <Menu/>
        <View style={[
          styles.linestyle,
          {
             marginVertical: 20, 
          }
       ] }>
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "grey",  

  },

});



export default Home;
