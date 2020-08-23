import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import color from "./color";

export default function FlatButton({ text, onPress, addColor = "orangeDark" }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: color[addColor] }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    // borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 100,
    backgroundColor: color.orangeDark,
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
