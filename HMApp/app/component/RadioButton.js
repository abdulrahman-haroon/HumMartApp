import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import color from "../styles/color";
import font from "../styles/fonts";

function RadioButton({ data, checked, setData, setChecked, setSelectedData }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 15,
      }}
    >
      {data.map((item, key) => (
        <View key={key}>
          {checked === key ? (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignItems: "center",
              }}
              // onPress={console.log(item)}
              // onPress={() => setData(item)}
              onPress={setSelectedData(item)}
            >
              <Ionicons
                name="ios-radio-button-on"
                size={24}
                color={color.orangeDark}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontFamily: font.ssl }}>{item}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignItems: "center",
              }}
              onPress={() => setChecked(key)}
            >
              <Ionicons
                name="ios-radio-button-off"
                size={24}
                color={color.orangeDark}
                style={{ marginRight: 10 }}
              />
              <Text style={{ fontFamily: font.ssl }}>{item}</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
      <View></View>
    </View>
  );
}

export default RadioButton;
