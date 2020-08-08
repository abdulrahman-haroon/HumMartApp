import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import color from "../styles/color";
function SubCategoryList({ image, title }) {
  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text>{title} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
});
export default SubCategoryList;
