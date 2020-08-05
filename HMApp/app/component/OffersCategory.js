import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

function OffersCategory({ image, price, prevPrice, description, quantity }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: 265,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          elevation: 0.5,
        }}
      >
        <View
          style={{
            height: 265,
            wdith: 130,
          }}
        >
          <View style={{ flex: 3 }}>
            <Image
              style={{
                width: 120,
                height: 150,
                resizeMode: "contain",
                overflow: "hidden",
              }}
              source={image}
            />
          </View>
          <View style={{ flex: 2 }}>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
              }}
            >
              <Text>{price} </Text>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  color: "gray",
                }}
              >
                {prevPrice}
              </Text>
            </View>
            <View>
              <Text numberOfLines={2} style={{ paddingVertical: 5 }}>
                {description}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: "gray" }}>{quantity}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default OffersCategory;
