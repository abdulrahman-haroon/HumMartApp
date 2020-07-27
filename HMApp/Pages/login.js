import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        We will send a SMS with a confirmation code to the number
      </Text>
      <View style={styles.textInputStyle}>
        <TextInput
          style={styles.tiStyle1}
          placeholder="+92"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.tiStyle2}
          placeholder="Mobile"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button color="black" title="NEXT" />
      </View>
    </View>
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
    padding: 30,
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  buttonStyle: {
    padding: 20,
  },
  tiStyle1: {
    height: 40,
    width: 50,
    color: "black",
  },
  tiStyle2: {
    height: 40,
    width: 50,
  },
  textInputStyle: {
    flexDirection: "row",
  },
});
