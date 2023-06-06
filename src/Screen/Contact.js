import { StyleSheet, Text, View, TextInput,Button, Alert } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";



const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("message");
  const [agree, setAgree] = useState(false);

  

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Please fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }

  };

  const addMessage = () => {
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Raise Your Knowldge</Text>

      <Text style={styles.description}>
        You can reach us anytime with Edu App
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>

        <TextInput
          style={styles.inputStyle}
          placeholder={"Edu App"}
          value={name}
          onChangeText={(userdata) => setName(userdata)}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your EMAIL</Text>

          <TextInput
            style={styles.inputStyle}
            placeholder={"abc@eduapp.com"}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your Mobile Number</Text>

          <TextInput
            style={styles.inputStyle}
            placeholder={"223338843"}
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>How can we help you?</Text>
          <TextInput
            style={[styles.inputStyle, styles.multilineStyle]}
            placeholder={"Tell Us About Yourself"}
            value={message}
            onChangeText={(msg) => setMessage(msg)}
            numberOfLines={5}
            multiline={true}
          />
          <Button title="Submit" onPress={submit}></Button>
        </View>
      </View>
    </View>
  );
};

// // {/*Checkbox*/}

// <View style={styles.wrapper}>
//   <Checkbox
//     value={agree}
//     onValueChange={() => setAgree(!agree)}
//     color={agree ? "#4630EB" : undefined}
//   />
//   <Text style={styles.wrapperText}>I have read and agreed with the TC</Text>
// </View>;

{
  /* submit button  */
}

{/* <TouchableOpacity
  style={[
    styles.buttonStyle,
    {
      backgroundColor: agree ? "#4630EB" : "grey",
    },
  ]}
  disabled={!agree}
  onPress={submit}
>
  <Text style={styles.buttonText}> Contact Us </Text>
</TouchableOpacity>; */}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_00Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_400Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_400Light",
  },
});
export default Contact;
