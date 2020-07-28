import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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
});
