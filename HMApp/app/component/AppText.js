import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

function AppText({ title, style }) {
  return (
    <Text numberOfLines={1} style={[styles.Text, style]}>
      {title}
    </Text>
  );
}
const styles = StyleSheet.create({
  Text: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        fontWeight: "bold",
        color: "red",
        fontFamily: "Avenir",
      },
      andriod: {
        fontSize: 24,
        fontWeight: "bold",
        color: "blue",
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;
