import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Text,
  Image,
} from "react-native";
function ListItemsDataDisplay({ title, grams, price, image }) {
  return (
    <View styles={styles.container}>
      <View style={styles.innerContainer}>
        {image && <Image style={styles.image} source={image} />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderWidth: 1,
  },
});
export default ListItemsDataDisplay;
