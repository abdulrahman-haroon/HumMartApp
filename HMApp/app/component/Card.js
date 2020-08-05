import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import Color from "../styles/color";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import fonts from "../styles/fonts";
import color from "../styles/color";

function Card({ title, price, prevPrice, quantity, rating, image }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "white",
          flexDirection: "row",
          borderWidth: 1,
          borderColor: Color.lightgray,
        }}
      >
        <View
          style={{
            paddingLeft: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="md-briefcase" size={24} color="green" />
          <Text style={{ color: "green", paddingLeft: 5 }}>
            {" "}
            Delivered by HumMart
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: 20,
          }}
        >
          <Ionicons name="ios-star" size={15} color="black" />
          <Text> {rating}</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: "white",
          marginVertical: 10,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={image}
        />
      </View>
      <View style={{ width: "100%", backgroundColor: "white", padding: 20 }}>
        <Text style={{ fontFamily: fonts.sst, fontSize: 18, color: "#2c2c2c" }}>
          {title}
        </Text>

        <Text style={{ fontFamily: fonts.sst, color: "gray", fontSize: 15 }}>
          {quantity}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text
            style={{ fontFamily: fonts.sst, fontWeight: "bold", fontSize: 15 }}
          >
            {price}
          </Text>
          <Text
            style={{ textDecorationLine: "line-through", marginHorizontal: 5 }}
          >
            {prevPrice}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="motorcycle" size={24} color="green" />
          <Text> Same Day Delivery</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: "30%",
                height: 30,
                backgroundColor: "#fe7027",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
export default Card;
