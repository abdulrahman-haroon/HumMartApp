import React from "react";
import { View, Text, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import fonts from "../styles/fonts";
import color from "../styles/color";

function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          backgroundColor: color.navigationColor,
          alignItems: "center",
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="white"
          style={{ marginLeft: 20, width: 30 }}
          onPress={() => navigation.goBack("Home")}
        />
        <Text
          style={{
            fontFamily: fonts.ssl,
            color: "white",
            paddingBottom: 5,
            fontSize: 15,
          }}
        >
          About Us
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: fonts.ssl,
            textAlign: "justify",
            marginVertical: 10,
            marginHorizontal: 13,
          }}
        >
          Hum Mart (Private) Limited is a subsidiary of Hum Network Limited.
          HumMart is a grocery products web store which aims at saving users
          from the hassle of going out and buying every day necessities. The
          online store brings to you different categories such as biscuits and
          chocolates, breakfast &amp: dairy, grocery and Staples, beverages,
          baby &amp; kids and Pet Care. You can choose from thousands of
          products. HumMart is currently delivering in Karachi only.{"\n"}
          {"\n"} HumMart aims to evolve the grocery service industry in Pakistan
          and we aim to target the people who lead a busy lifestyle to shift
          them from the traditional method of grocery procurement to a more
          advance online mode. We will ensure a hassle-free shopping experience
          for our customers, so that they can spend valuable time and energy
          somewhere else. {"\n"}
          {"\n"}HumMart aims to be a very customer centric organization. We
          intend to focus on complete customer journey of our customers,
          starting with ordering quality products at competitive pricing, on
          time delivery and hassle-free return policy.
        </Text>
      </ScrollView>
      {/* {"\n"}{"\n"} */}
    </View>
  );
}

export default AboutUs;
