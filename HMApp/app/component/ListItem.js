import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../component/AppText";
import color from "../styles/color";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} title={title} />
        {subTitle && <AppText style={styles.subTitle} title={subTitle} />}
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 2,
    borderTopColor: color.lightgray,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitle: {
    color: "gray",
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ListItem;
