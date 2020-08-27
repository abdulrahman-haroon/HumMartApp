import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { useFormikContext } from "formik";

import { Ionicons } from "@expo/vector-icons";

import color from "../../styles/color";
import font from "../../styles/fonts";

import ErrorMessage from "../Form/ErrorMessage";

function RadioButton({ data, checked, setChecked, name }) {
  const { touched, errors, setFieldValue } = useFormikContext();
  return (
    <>
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
                onPress={() => (setChecked(key), setFieldValue(name, item))}
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
      </View>
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default RadioButton;
