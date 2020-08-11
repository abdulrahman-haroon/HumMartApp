import React from "react";
import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import color from "../styles/color";
import fonts from "../styles/fonts";
function HeaderNavigation({ showPromotion, navigation, title, counter }) {
  return (
    <View>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          backgroundColor: color.navigationColor,
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
          {title}
        </Text>
        <Ionicons
          style={{ flex: 1, marginLeft: 10 }}
          name="md-search"
          size={24}
          color="white"
        />
        <FontAwesome5
          style={{ flex: 1 }}
          name="shopping-cart"
          size={20}
          color="white"
          onPress={() => navigation.navigate("Cart")}
        />
        <View
          style={{
            width: 18,
            height: 18,
            borderRadius: 18 / 2,
            backgroundColor: color.orangeDark,
            right: 18,
            bottom: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontFamily: fonts.ssl }}>
            {counter}
          </Text>
        </View>
      </View>
      {showPromotion && (
        <View
          style={{
            flexDirection: "row",
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EvilIcons name="clock" size={20} color={color.lightBlue} />
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontSize: 13,
              color: color.darkishLight,
            }}
          >
            Tomorrow 10:00 AM |
          </Text>
          <Ionicons
            name="md-car"
            size={20}
            color={color.lightBlue}
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <Text
            style={{
              fontFamily: fonts.ssl,
              fontSize: 13,
              color: color.darkishLight,
            }}
          >
            Min Rs 4000 for free delivery
          </Text>
        </View>
      )}
    </View>
  );
}

export default HeaderNavigation;
