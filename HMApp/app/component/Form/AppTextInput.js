import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../../styles/color";
import fonts from "../../styles/fonts";

function AppTextInput({ ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={color.lightdarkGray}
        style={{
          fontFamily: fonts.ssl,
          fontWeight: "600",
          fontSize: 15,
          width: "100%",
        }}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: color.lightdarkGray,
    borderBottomWidth: 0.8,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
