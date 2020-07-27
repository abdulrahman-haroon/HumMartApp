import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    // borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 140,
    backgroundColor: "#c6c6c6",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "sans-serif-thin",
  },
});
