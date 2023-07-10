import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);
  let fetchData;
  const getUserData = async () => {
    // try{
    //   const response = await axios.get("http://192.168.1.7:5276/api/Student");
    //   setMyData(response);
    // }
    // catch(err){
    //   console.error(err);
    // }

    try{
      var response = await fetch('http://127.0.0.1:5276/api/Student');//fetch("http://192.168.1.7:5276/api/Student");
      var data = await response.json();
      fetchData = data;
      setMyData(data);
      console.log("myData", myData);
    }
    catch(err){
      console.error(err);
    }
    // return fetch(
    //   "http://192.168.1.7:5276/api/Student"
    // )
    // .then((response) => response.text())
    // .then(text => console.log(text))
    // .catch((error) =>{
    //   console.error(error);
    // });

  };

  useEffect(() => {
    getUserData();
    setMyData(fetchData);
  }, []);

  

// render the students cards
const showUserData = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        {/* <Image style={styles.imgStyle} source={{ uri: item.image }} /> */}
      </View>

      <View>
        <View style={styles.bioDataContainer}>
          <Text style={styles.bioData}> Bio-Data </Text>
          <Text style={styles.idNumber}>
            {/* {item.id < 10 ? `#0${item.id}` : `#{item.id}`} */}
          </Text>
        </View>

        <View style={styles.mainContain}>
          <Text style={styles.myName}> Name: {item.firstName} </Text>
          <Text style={styles.myName}> Middle Name: {item.middleName} </Text>
          <Text style={styles.myName}> Last Name: {item.lastName} </Text>
        </View>
      </View>
    </View>
  );
};

const data = [myData];
return (
  
  <View>
    <Text style={styles.mainHeader}>List of Students</Text>
    <FlatList
      keyExtractor={(item, index) => {return index.toString();}}
      data={myData}
      renderItem={showUserData}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
    
  </View>
);
};



const styles = StyleSheet.create({
mainContainer: {
  width: "100%",
  minHeight: "100%",
  paddingVertical: 50,
  backgroundColor: "#ebedee",
},
card: {
  width: 250,
  height: 350,
  backgroundColor: "#fff",
  borderRadius: 5,
  margin: 20,
},
bioDataContainer: {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#353535",
  paddingVertical: 10,
  fontFamily: "JosefinSans_400Regular",
},
// idNumber: {
//   fontSize: 20,
//   color: "rgba(255, 255, 255, 0.5)",
//   fontFamily: "JosefinSans_400Regular",
//   paddingRight: 10,
// },
// bioData: {
//   fontSize: 30,
//   color: "#fff",
//   fontFamily: "JosefinSans_400Regular",
// },
mainHeader: {
  fontSize: 30,
  color: "#a18ce5",
  textAlign: "center",
  fontFamily: "JosefinSans_400Regular",
},
imgContainer: {
  padding: 10,
},
imgStyle: {
  width: "100%",
  height: 180,
},
mainContain: {
  padding: 10,
  backgroundColor: "#353535",
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
},
myName: {
  fontSize: 14,
  color: "#fff",
  marginBottom: 10,
  alignSelf: "flex-start",
  textTransform: "capitalize",
  fontFamily: "JosefinSans_400Regular",
},
});

export default UserData;
