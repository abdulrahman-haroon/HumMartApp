import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import Color from "../styles/color";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import fonts from "../styles/fonts";

function Card({ prevPrice, route, navigation }) {
  let data = route.params;
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          backgroundColor: Color.navigationColor,
          alignItems: "center",
        }}
      >
        <Ionicons
          style={{ marginLeft: 20, width: 30 }}
          name="ios-arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
        <Text
          numberOfLines={1}
          style={{ flex: 7, color: "white", fontFamily: fonts.ssl }}
        >
          {data.title}
        </Text>
        <Ionicons
          style={{ flex: 1, marginLeft: 10 }}
          name="md-search"
          size={24}
          color="white"
        />
        <FontAwesome5
          style={{ flex: 1, marginRight: 10 }}
          name="shopping-cart"
          size={20}
          color="white"
        />
      </View>
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
          <Text> {data.rating}</Text>
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
          source={data.image}
        />
      </View>
      <View style={{ width: "100%", backgroundColor: "white", padding: 20 }}>
        <Text style={{ fontFamily: fonts.sst, fontSize: 18, color: "#2c2c2c" }}>
          {data.title}
        </Text>

        <Text style={{ fontFamily: fonts.sst, color: "gray", fontSize: 15 }}>
          {data.quantity}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text
            style={{ fontFamily: fonts.sst, fontWeight: "bold", fontSize: 15 }}
          >
            {data.price}
          </Text>
          {prevPrice && (
            <Text
              style={{
                textDecorationLine: "line-through",
                marginHorizontal: 5,
              }}
            >
              {data.prevPrice}
            </Text>
          )}
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
