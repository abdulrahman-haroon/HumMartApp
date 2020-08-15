import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import color from "../../styles/color";
import font from "../../styles/fonts";

function OptionsNicknameAddress({
  data,
  checked,
  setData,
  setChecked,
  setSelectedData,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 8,
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
              onPress={setSelectedData(item)}
            >
              <View
                style={{
                  width: 80,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: color.orangeDark,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: font.ssl,
                    fontSize: 16,
                    color: color.white,
                  }}
                >
                  {item}
                </Text>
              </View>
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
              <View
                style={{
                  width: 80,
                  height: 40,
                  borderRadius: 10,
                  borderWidth: 0.8,
                  backgroundColor: color.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: font.ssl,
                    fontSize: 16,
                    color: color.black,
                  }}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      ))}
      <View></View>
    </View>
  );
}

export default OptionsNicknameAddress;
