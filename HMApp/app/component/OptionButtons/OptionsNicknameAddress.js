import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import color from "../../styles/color";
import font from "../../styles/fonts";

import { useFormikContext } from "formik";

import ErrorMessage from "../Form/ErrorMessage";

function OptionsNicknameAddress({ data, checked, setChecked, name }) {
  const { touched, errors, setFieldValue } = useFormikContext();

  return (
    <>
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
                onPress={() => (setChecked(key), setFieldValue(name, item))}
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
      </View>
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default OptionsNicknameAddress;
