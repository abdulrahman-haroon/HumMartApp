import React from "react";
import { View, Text } from "react-native";
import font from "../../styles/fonts";

function ErrorMessage({ error, visible, onPress }) {
  if (!visible || !error) return null;
  return (
    <Text style={{ color: "red", fontFamily: font.ssl }} onPress={onPress}>
      {error}
    </Text>
  );
}

export default ErrorMessage;
