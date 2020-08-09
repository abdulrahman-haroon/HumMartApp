import React from "react";
import { View, Text, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import fonts from "../styles/fonts";
import color from "../styles/color";

function ContactUs({ navigation }) {
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
          Contact Us
        </Text>
      </View>
      <View style={{ marginLeft: 15, marginTop: 15 }}>
        <Text
          style={{
            fontFamily: fonts.ssm,
            fontWeight: "bold",
            fontSize: 18,
            color: color.contactColor,
            marginBottom: 15,
          }}
        >
          Contact Details
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: color.contactColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="contacts"
              size={30}
              color="white"
              style={{ marginRight: 3 }}
            />
          </View>

          <Text
            style={{
              width: "80%",
              marginLeft: 10,
              fontFamily: fonts.ssl,
              fontWeight: "bold",
              color: color.lightdarkGray,
              textAlign: "justify",
              marginRight: 10,
            }}
          >
            Plot number: SR7, survey number 413 sector 2, adjacent to sector 7-A
            Korngi Industrial Area, Karachi
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: color.contactColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="phone-square" size={30} color="white" />
          </View>

          <Text
            style={{
              width: "80%",
              marginLeft: 10,
              fontFamily: fonts.ssl,
              fontWeight: "bold",
              color: color.lightdarkGray,
              textAlign: "justify",
              marginRight: 10,
            }}
          >
            (021) 111 116 278
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: color.contactColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="paper-plane" size={27} color="white" />
          </View>

          <Text
            style={{
              width: "80%",
              marginLeft: 10,
              fontFamily: fonts.ssl,
              fontWeight: "bold",
              color: color.lightdarkGray,
              textAlign: "justify",
              marginRight: 10,
            }}
          >
            cistomer@hummart.com
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ContactUs;
