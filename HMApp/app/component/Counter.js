import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import color from "../styles/color";

import { Entypo } from "@expo/vector-icons";

function Counter() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [visibleCounter, setVisibleCounter] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      {visible === true ? (
        <TouchableOpacity
          style={{
            width: "80%",
            height: 30,
            backgroundColor: color.orangeDark,
            borderRadius: 5,
            marginVertical: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setVisible(false), setVisibleCounter(true);
          }}
        >
          <Text style={{ color: "white" }}>ADD</Text>
        </TouchableOpacity>
      ) : null}
      {visibleCounter === true ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Entypo
            name="circle-with-minus"
            size={24}
            color={color.orangeDark}
            style={{ marginRight: 5 }}
            onPress={() => {
              count === 0
                ? (setVisible(true), setVisibleCounter(false))
                : setCount(count - 1);
            }}
          />
          <Text style={{ fontSize: 15 }}> {count}</Text>
          <Entypo
            name="circle-with-plus"
            size={24}
            color={color.orangeDark}
            style={{ marginLeft: 8 }}
            onPress={() => setCount(count + 1)}
          />
        </View>
      ) : null}
    </View>
  );
}

export default Counter;
