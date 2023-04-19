import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Courses from "../Screen/api/Course";
import { useNavigation } from "@react-navigation/native";

const Course = () => {
  const navigation = useNavigation();

  const courseCard = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.mainHeader}>{item.description}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle}
                  onPress={() => navigation.navigate("CourseDetails")}>
                <Text style={styles.buttonText} >course Details</Text>
                </TouchableOpacity>

              </View>

        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
cardImage: {
  width: '100%',
  height:undefined,
  aspectRatio: 1,

},
mainContainer: {
  paddingHorizontal: 20,
},

courseContainer: {
   padding: 30,
   backgroundColor: "rgba(255, 255, 255, 0.90)",
   textAlign: "center",
   borderRadius: 5,
   shadowColor: "grey",
   shadowOffset: { width: 0, height: 0 },
   shadowOpacity: 0.5,
   shadowRadius: 8,
   elevation: 8,
   marginVertical: 30,
},
mainHeader:{
    fontSize: 22,
    color: "#344055",
    textTransform:"uppercase",
    fontWeight: 500,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    fontFamily:"Nunito_600SemiBold",
},

description:{
     textAlign:"left",
    
     paddingBottom: 20,
     lineHeight: 20,
     color: "#7d7d7d",
},
buttonStyle: {
  backgroundColor: "#809fff",
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},
buttonText: {
  fontSize: 20,
  color: "#eee",
 
  textTransform: "capitalize",
},


});


export default Course;
