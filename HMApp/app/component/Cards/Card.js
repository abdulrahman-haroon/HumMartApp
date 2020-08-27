import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import Color from "../../styles/color";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import fonts from "../../styles/fonts";
import Counter from "../Counter";
import color from "../../styles/color";
import ShoppingCart from "../ShoppingCart";

function Card({ prevPrice, route, navigation, counter }) {
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
          onPress={() => navigation.goBack()}
        />
        <Text
          numberOfLines={1}
          style={{ flex: 7, color: "white", fontFamily: fonts.ssl }}
        >
          {data.description}
        </Text>
        <Ionicons
          style={{ flex: 1, marginLeft: 10 }}
          name="md-search"
          size={24}
          color="white"
        />
        <ShoppingCart navigation={navigation} />
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
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
          }}
          source={{ uri: data.image }}
        />
      </View>
      <View style={{ width: "100%", backgroundColor: "white", padding: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontFamily: fonts.ssl,
            fontSize: 18,
            color: "#2c2c2c",
            marginBottom: 10,
          }}
        >
          {data.description}
        </Text>

        <Text
          style={{
            fontFamily: fonts.ssl,
            color: Color.darkishLight,
            fontSize: 15,
          }}
        >
          {data.quantity}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text
            style={{ fontFamily: fonts.sst, fontWeight: "bold", fontSize: 15 }}
          >
            Rs {data.price}
          </Text>
          {prevPrice && (
            <Text
              style={{
                fontFamily: fonts.ssl,
                textDecorationLine: "line-through",
                marginHorizontal: 5,
              }}
            >
              Rs {data.prevPrice}
            </Text>
          )}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "30%",
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Counter item={data} />
            </TouchableOpacity>
          </View>
        </View>

        {data.sameDayDelievery === true && (
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
            ></View>
          </View>
        )}
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
