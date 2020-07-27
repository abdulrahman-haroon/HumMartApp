import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  TouchableHighlight,
} from "react-native";
import FlatButton from "../styles/button";

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* <Modal visible={false}> */}
        <Text style={styles.textStyle}>
          We will send a SMS with a confirmation code to the number
        </Text>
        <View style={styles.textInputStyle}>
          <View style={{ paddingRight: 10 }}>
            <TextInput
              style={styles.tiStyle1}
              placeholder="+92"
              keyboardType="numeric"
              editable={false}
              placeholderTextColor="black"
            />
          </View>
          <View>
            <TextInput
              style={styles.tiStyle2}
              placeholder="Mobile"
              keyboardType="numeric"
            />
          </View>
        </View>
        <FlatButton
          text="next"
          onPress={() => console.log("Next button is pressed check")}
        />
        {/* </Modal> */}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //   justifyContent: "flex-end",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textStyle: {
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    fontFamily: "sans-serif-thin",
  },
  tiStyle1: {
    color: "black",
    borderBottomWidth: 2,
  },
  tiStyle2: {
    color: "black",
    borderBottomWidth: 2,
  },
  textInputStyle: {
    flexDirection: "row",
    paddingBottom: 20,
  },
});
