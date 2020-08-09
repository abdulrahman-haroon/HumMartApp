import React from "react";
import { View, Text } from "react-native";
function PracticeFlatscreen(props) {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <View style={{ width: 100, height: 100, backgroundColor: "black" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "yellow" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "white" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "pink" }} />
    </View>
  );
}

export default PracticeFlatscreen;
