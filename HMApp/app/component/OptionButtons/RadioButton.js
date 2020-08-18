import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import { useFormikContext } from "formik";

import { Ionicons } from "@expo/vector-icons";

import color from "../../styles/color";
import font from "../../styles/fonts";

function RadioButton({
  data,
  checked,
  setChecked,
  setSelectedData,
  ...otherProps
}) {
  const { handleChange } = useFormikContext();
  return (
    <View
      style={{
        flexDirection: "row",
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
              {/* <TextInput
                placeholderTextColor={color.lightdarkGray}
                style={{
                  fontFamily: font.ssl,
                  fontWeight: "600",
                  fontSize: 15,
                }}
                placeholder={item}
                //onChange={() => setFieldValue(item)}
                onChangeText={handleChange("radioButton")}
              /> */}
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
