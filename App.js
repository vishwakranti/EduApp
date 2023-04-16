import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/Screen/Home';     

export default function App() {
  const description = 
  "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.";
  return (
    <View style={styles.mainContainer} >
     <View style={styles.homeTop}>
     <Image style={styles.headerImage}
     resizeMode="contain"
       source={require("./assets/Images/logo.jpeg")}
     />
      <Text style={styles.mainHeader}>Welcome to Edu App</Text>
      <Text
      style={[
        styles.mainHeader,
        {
          fontsize: 33,
          color: "#4c5dab",
          margintop: 0,
        },

      ]}>
    
    </Text>
     <Text style={styles.paraStyle}>{description} </Text>
      <Home/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    display: 'flex',
    justifyContent: "space-between",
    paddingHorizontal: "10px",
    backgroundColor:"#FFF",
    textAlign: "center",
  
  },

 

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display:"flex",
    alignItems:"stretch",
    margintop:50,
    borderRadius: 30,

  },

  mainHeader:{
    fontSize:30,
    color: "#344055",
    textAlign: "center",
    textTransform: "uppercase", 
  },

  paraStyle:{
         textAlign:"left",
         fontSize:19,
         color:"7d7d7d",
         margintop:30,
         paddingBottom:20,
         lineHeight:26,
  },
});
