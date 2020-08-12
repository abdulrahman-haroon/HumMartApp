import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../styles/color";
import fonts from "../styles/fonts";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orangeDark,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,

    marginVertical: 20,
    right: 1,
  },
  btnTitle: {
    color: "white",
    fontSize: 18,

    fontFamily: fonts.ssl,
  },
});

export default AppButton;
