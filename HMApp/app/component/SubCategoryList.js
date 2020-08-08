import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import color from "../styles/color";
function SubCategoryList({ image, title }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 70, height: 70 }}
        source={require("../assets/SubCategories/mobile.jpg")}
      />
      <Text>Mobiles</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderTopWidth: 0.5,
    borderTopColor: color.lightgray,
    width: "100%",
    height: "15%",
    justifyContent: "center",
    marginLeft: 15,
    marginBottom: 8,
  },
});
export default SubCategoryList;
