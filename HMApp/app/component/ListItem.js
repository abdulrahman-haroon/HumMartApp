import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../component/AppText";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} title={title} />
        {subTitle && <AppText style={styles.subTitle} title={subTitle} />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
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
});

export default ListItem;
