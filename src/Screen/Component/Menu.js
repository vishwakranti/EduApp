import { useNavigation } from "@react-navigation/native";
import React from "react";

import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={StyleSheet.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("Course")}
      >
        <Text>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("Student")}
      >
        <Text>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("About")}
      >
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Menu;
