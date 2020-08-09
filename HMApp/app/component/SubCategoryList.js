import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import color from "../styles/color";
import fonts from "../styles/fonts";

function SubCategoryList({ image, title }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          resizeMode="contain"
          style={{ width: 70, height: 70 }}
          source={require("../assets/SubCategories/mobile.jpg")}
        />
        <Text style={{ fontFamily: fonts.sst, fontSize: 14 }}>Mobiles</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
});
export default SubCategoryList;
