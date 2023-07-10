import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Vish Suryawanshi </Text>
      <Text style={styles.paraStyle}> I am a full stack developer 😀 </Text>
      <View>
        <Image
          style={styles.imgStyle}
          source={require("../assets/Images/vish_pic.jpg")}
        />
      </View>
      <Text style={styles.aboutSubheader}> About me </Text>
      <Text style={styles.paraStyle}>
        Education is the most powerful weapon which you can use to change the
        world.
      </Text>
      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://github.com/vishwakranti")}>
            <Text style={{color: "#5769eb",}}>LinkedIn Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 100,
    height: 100,
  },


});
export default About;
