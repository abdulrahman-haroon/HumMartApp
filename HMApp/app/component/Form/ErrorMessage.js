import React from "react";
import { View, Text } from "react-native";
import font from "../../styles/fonts";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={{ color: "red", fontFamily: font.ssl }}>{error}</Text>;
}

export default ErrorMessage;
