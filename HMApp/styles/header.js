import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header({ navigation }) {
  const openMenu = () => {
    // navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <Image
          style={{ width: 130, height: 130 }}
          source={require("../assets/WelcomeLoading.png")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    position: "absolute",
    left: -50,
  },
});
