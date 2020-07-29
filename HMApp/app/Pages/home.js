import React from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";

import color from "../styles/color";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Text>Slider Images</Text>
      </View>
      <View style={styles.offer}>
        <Text style={styles.offerText}>Offers</Text>
        <View style={styles.seeAllButton}>
          <Button title="See All" />
        </View>
        <View style={styles.offerContainers}>
          <View style={styles.offerContainer1}>
            <Text>Slider Container 1</Text>
          </View>
          <View style={styles.offerContainer1}>
            <Text>Slider Container 2</Text>
          </View>
          <View style={styles.offerContainer1}>
            <Text>Slider Container 3</Text>
          </View>
        </View>
      </View>
      <View style={styles.dropDownContainer}>
        <View style={styles.dropDownContainer1}>
          <Text>Drop Down 1</Text>
        </View>
        <View style={styles.dropDownContainer1}>
          <Text>Drop Down 2</Text>
        </View>
        <View style={styles.dropDownContainer1}>
          <Text>Drop Down 3</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  slider: {
    width: "100%",
    height: "25%",
    backgroundColor: color.gray,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  offer: {
    width: "100%",
    height: "40%",
    backgroundColor: "#787878",
    top: -10,
  },
  offerText: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  seeAllButton: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  offerContainers: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  offerContainer1: {
    width: "30%",
    height: "85%",
    backgroundColor: "white",
    bottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownContainer: {
    flex: 1,
    width: "100%",
    height: "20%",
    backgroundColor: "#787878",
    justifyContent: "space-evenly",
  },
  dropDownContainer1: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
